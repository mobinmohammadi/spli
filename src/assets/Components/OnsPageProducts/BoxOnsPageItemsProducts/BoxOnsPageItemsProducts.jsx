import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function BoxOnsPageItemsProducts(props) {

  const routProduct = useNavigate()
    const goTOProducts = () =>{
      routProduct(`/onspageproduct/${props.products.id}`)

    }

  return (
    <div>
      <div className="max-w-48  flex flex-col props-center gap-2">
        <img className="w-32 rounded-md" src={`../${props.products.img}`} alt="" />
        <span onClick={() => goTOProducts()} className="max-w-[100px] text-xs inline-block text-[13px]">
          {props.products.name}
        </span>
        <div className="flex justify-between gap-3 props-center">
          <button onClick={() => addToUserBasket(props.products)} >

          <svg  className="w-6 h-6 bg-[#ef3f56] cursor-pointer text-white rounded-full">
            <use href="#plus-circle"></use>
          </svg>
          </button>
          <span className="text-xs">قیمت {props.products.price} </span>
        </div>
      </div>
    </div>
  );
}
