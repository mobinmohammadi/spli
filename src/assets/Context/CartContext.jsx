import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart")
    return storedCart ? JSON.parse(storedCart) : []
  });
  const saveInToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const getDataInLocaleStorage = () => {
      const localStorageData = JSON.parse(localStorage.getItem("cart"));
    console.log(localStorageData);
    
  };

  const removeInBasket = (productID) => {
  setCart((prevCart) => {
    let product  = prevCart.find(product => product.id === productID)
    if (!product) return prevCart 

    if(product.count > 1){
     return prevCart.map(item => item.id === productID ? {...item , count : item.count - 1} : item)
    }
    else {
      return prevCart.filter(item => item.id !== productID)
    }
  })
    // if(arrayFoundForMaines.count > 1){

    //   const newArray = arrayFoundForMaines.count--
    //   setCart(prev => [...prev , {newArray}])
    //   console.log(newArray);
      
    // }
    // else{
    // let arrayFoundForDelete = cart.filter(product => product.id !== productID)
    // setCart(arrayFoundForDelete)

      
    // }

    
    // setCart(newArrayAfterDeleteOnProduct)
    
  }

  useEffect(() => {
    saveInToLocalStorage(cart);
  }, [cart]);
  const addToCart = (product) => {
    setCart((prevCart) => {
      const exist = prevCart.find((item) => item.id == product.id);
      if (exist) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, count: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart , removeInBasket }}>
      {children}
    </CartContext.Provider>
  );
};
