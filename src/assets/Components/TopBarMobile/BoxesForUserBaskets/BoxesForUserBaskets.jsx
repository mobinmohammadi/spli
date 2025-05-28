import React from "react";

export default function BoxesForUserBaskets({name , img , price}) {
  return (
    <div className="flex mt-3 gap-1 pr-2 border-b border-zinc-600 border-solid pb-3">
      <img
        className="w-20 h-20 rounded-md"
        src={img}
        alt=""
      />
      <div className="flex flex-col justify-between">
        <span className="text-sm">{name}</span>
        <span className="text-xs ">{price} تومان</span>
      </div>
      <div className="cursor-pointer flex hover:& > *:hover:text-red-600 justify-center items-center ">
        <svg className="w-5 h-5 text-zinc-700  transition-all">
          <use href="#trash"></use>
        </svg>
      </div>
    </div>
  );
}
