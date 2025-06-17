import React, { useState } from "react";
import TopBarMobile from "../../../../assets/Components/TopBarMobile/TopBarMobile.";
import BradCrumbCart from "../BradCrumbCart/BradCrumbCart";
import CheckoutProgressBar from "../CheckoutProgressBar/CheckoutProgressBar";
import BoxDetailsBasket from "../BoxDetailsBasket/BoxDetailsBasket";
import MainContentSecondOfTheShopping from "./MainContentSecondOfTheShopping/MainContentSecondOfTheShopping";
import DetailsBoxUserForOrders from "../DetailsBoxUserForOrders/DetailsBoxUserForOrders";

export default function TheSeconedStepOfTheShoppingCart() {
  const [isDetailsBoxUserForOrders, setDetailsBoxUserForOrders] =
    useState(false);
  const [isActiveDay, setIsActiveDay] = useState("سه شنبه");
  return (
    <div className="w-full">
      <TopBarMobile />
      <div className="pt-22 w-full flex flex-col gap-7 text-sm font-Dana-Bold container-custom pr-3 pl-3">
        <BradCrumbCart />
        <CheckoutProgressBar currentStep={2} />
        <div className="flex justify-between flex-col sm:flex-row gap-5">
          <div className="flex w-full flex-col gap-5 ">
            <div className="flex w-full items-center justify-between h-1 ">
              <span className=" w-58  text-xs sm:text-sm ">
                انتخاب آدرس تحویل سفارش
              </span>
              <span className="w-full h-[2px] bg-slate-400 rounded-full inline-block"></span>
            </div>
            <div
              onClick={() => setDetailsBoxUserForOrders(true)}
              className="border-4 flex gap-1 cursor-pointer  items-center justify-center text-slate-400 h-14  border-slate-300 border-dashed"
            >
              <svg className="w-6 h-6">
                <use href="#plus"></use>
              </svg>
              <span>ایجاد آدرس جدید</span>
            </div>
            <MainContentSecondOfTheShopping
              isActiveDay={isActiveDay}
              setIsActiveDay={setIsActiveDay}
            />
          </div>
          <BoxDetailsBasket />
        </div>
      </div>
      {isDetailsBoxUserForOrders ? (
        <div className="">
          <DetailsBoxUserForOrders
            setDetailsBoxUserForOrders={setDetailsBoxUserForOrders}
            isDetailsBoxUserForOrders={isDetailsBoxUserForOrders}
          />
        </div>
      ) : null}
    </div>
  );
}
