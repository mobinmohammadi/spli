import React from "react";

export default function ArticlesItems({title,img,disc}) {
  return (
    <div
      className="
     bg-white flex flex-col gap-3 border-2 border-slate-100 border-solid "
    >
      <img className="object-cover rounded-b-md " src={img} alt="" />
      <div className="pt-2 pr-4 pl-4 pb-2">
      <a href="#" className="text-md font-bold line-clamp-1">{title}...</a>
      <span className="line-clamp-4 text-xs pt-7 leading-6">
            {disc}      
      </span>
      </div>    
    </div>
  );
}
