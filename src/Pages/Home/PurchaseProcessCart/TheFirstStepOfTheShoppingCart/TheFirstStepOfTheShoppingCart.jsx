import React, { useContext } from "react";
import TopBarMobile from "../../../../assets/Components/TopBarMobile/TopBarMobile.";
import CheckoutProgressBar from "../CheckoutProgressBar/CheckoutProgressBar";
import MainBasketCartInUserBasket from "../MainBasketCartInUserBasket/MainBasketCartInUserBasket";
import { CartContext } from "../../../../assets/Context/CartContext";
import { Link } from "react-router-dom";
import BoxDetailsBasket from "../BoxDetailsBasket/BoxDetailsBasket";

export default function TheFirstStepOfTheShoppingCart() {
  const { cart, allPriceInBasket } = useContext(CartContext);

  return (
    <div className="flex gap-5 pb-5 flex-col sm:flex-row">
      <div className="w-full">
        <div className="bg-[#cce5ff] text-[#1a4dac] flex items-center justify-start p-2 gap-1 rounded-sm">
          <svg className="w-8 h-8">
            <use href="#information-circle"></use>
          </svg>
          <span className="text-x">
            افزودن کالا به سبد خرید شما به معنی رزرو کالا برای شما نمی باشد. لذا
            باید مراحل بعدی خرید خود را تکمیل کنید.
          </span>
        </div>
        <div className="flex  items-center  pt-5 pb-5">
          <span className=" w-20  text-xs sm:text-sm mt-[2px]">سبد خرید</span>
          <span className="w-full h-[2px] bg-slate-400 rounded-full inline-block"></span>
        </div>
        <div className="flex gap-5 flex-col pb-6 border-b-1 border-b-slate-400 border-solid">
          {cart.length ? (
            cart.map((item) => <MainBasketCartInUserBasket item={item} />)
          ) : (
            <div className="flex w-full items-center justify-center">
              <span className=" ">سبد خرید شما خالی است ):</span>
            </div>
          )}
          {/* <MainBasketCartInUserBasket/> */}
        </div>
      </div>
      <BoxDetailsBasket cart={cart} allPriceInBasket={allPriceInBasket} />
    </div>
  );
}
