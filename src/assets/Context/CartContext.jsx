import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
      setCart((prevCart) => {
        const exist  = prevCart.find(item => item.id == product.id)


        if(exist){
           return prevCart.map(item => item.id === product.id ? {...item , count : item.count + 1 } : item )
        }
        else {
            return [...prevCart , {...product , count : 1}]
        }
    });
    
  };

  useEffect(() => {
    console.log(cart);
    
  },[cart])

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
