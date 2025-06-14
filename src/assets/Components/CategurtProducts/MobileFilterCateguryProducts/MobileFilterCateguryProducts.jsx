import React from "react";
import RangePriceProductMobile from "./RangePriceProductMobile/RangePriceProductMobile";
import SearchInCateguryMobile from "./SearchInCateguryMobile/SearchInCateguryMobile";

export default function MobileFilterCateguryProducts({
  isShowBoxCateguryByMobile,
  setIsShowBoxCateguryByMobile,
}) {
  return (
    <div className=" fixed top-[37%] p-5 right-[10%] rounded-sm bg-white shadow-2xl w-[80%]  h-56">
      <div className="flex justify-between flex-col h-full">
        <div className="">
          <RangePriceProductMobile />
          <SearchInCateguryMobile />
        </div>
        <div className="font-Dana flex gap-0.5 justify-end text-xs ">
          <button onClick={() => setIsShowBoxCateguryByMobile(false)} className="border-1 text-red-400 rounded-sm pr-6 pl-6 pt-1 pb-1 cursor-pointer hover: transition-all hover:text-zinc-800 hover:border-red-600 border-red-400 border-solid">
            لغو{" "}
          </button>
          <button onClick={() => setIsShowBoxCateguryByMobile(false)} className="border-1 bg-red-400 text-white rounded-sm cursor-pointer pt-1 pb-1 pr-6 pl-6 border-red-400 border-solid">
            اعمال{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
