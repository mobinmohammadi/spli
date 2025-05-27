import React from "react";

export default function BoxesProducts({name , img , price}) {
  return (
    <div className="bg-slate-200 rounded-md pb-2 h-[280px]  flex flex-col gap-3">
      <img className="w-40 h-40" src={`../${img}`} alt="" />
      <div className="pr-2 pl-2 flex gap-5 flex-col ">
      <span className="font-bold text-sm">{name}</span>
        <div className="flex text-xs justify-between items-center">
          <span>4 نفر</span>
          <div className="flex & > *:text-amber-500">
            <svg className="w-4 h-4">
              <use href="#star"></use>
            </svg>
            <svg className="w-4 h-4">
              <use href="#star"></use>
            </svg>
            <svg className="w-4 h-4">
              <use href="#star"></use>
            </svg>
            <svg className="w-4 h-4">
              <use href="#star"></use>
            </svg>
            <svg className="w-4 h-4">
              <use href="#star"></use>
            </svg>
          </div>
        </div>
        <div className="flex text-zinc-800 font-bold gap-0.5">
          <span>{price}</span>
          <span>تومان</span>
        </div>
      </div>
    </div>
  );
}
