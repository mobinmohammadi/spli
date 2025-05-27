import React from "react";
import TasteProducts from "../TasteProducts/TasteProducts";
import { div } from "framer-motion/client";

export default function NameAndCateguryNameAndMore({
  filtredOnsProducts,
  getAlltest,
  setIdToast,
}) {
  return (
    <div className="flex gap-5 w-full ml-5 ">
      <div className="w-full justify-between flex flex-col gap-4 ">
        <div className="">
          <div className="flex mt-5 pb-5 flex-col justify-between  & > *:text-xs gap-2 & > *:sm:max-w-full border-b-1 border-solid border-slate-200">
            <div className="flex mt-5 pb-5 justify-between  & > *:text-xs gap-2 & > *:sm:max-w-full border-b-1 border-solid border-slate-200">
              <div className="">
                <span>نام محصول : </span>
                <span className="text-red-500">
                  {filtredOnsProducts[0].name}
                </span>
              </div>
              <div className="">
                <span>دسته بندی : </span>
                <span className="text-red-500 leading-4">
                  {" "}
                  یونیورسال نوتریشن | Universal Nutrition
                </span>
              </div>
            </div>
            <div className="text-xs border-t-1 mt-5 border-solid border-slate-100 ">
              <span className="mt-3 text-zinc-800 text-sm inline-block pb-5 font-bold ">
                مشخصات محصول :
              </span>
              <ul className="flex flex-col gap-5 & > *:pr-7 ">
                <li className="item-products-details">
                  <span>تاریخ انقضا :</span>
                  <span>1405/03/01</span>
                </li>
                <li className="item-products-details">
                  <span>تعداد سروینگ : </span>
                  <span>180 عددی | 30 سروینگ</span>
                </li>
                <li className="item-products-details">
                  <span>نوع محصول : </span>
                  <span>تبلت</span>
                </li>
              </ul>
            </div>
          </div>
          {getAlltest.length > 1 ? (
            <div className="text-center leading-6 mt-2">
              <span className="text-sm text-center md:text-start w-full">
                یکی از طعم های زیر را انتخاب کنید 🙂
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 items-center justify-center">
                {getAlltest.map((tast) => (
                  <div onClick={() => setIdToast(tast.id)} className="">
                    <TasteProducts {...tast} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
