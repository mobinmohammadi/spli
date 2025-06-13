import React from "react";
import { Link } from "react-router-dom";
import "./../../../App.css";

export default function RoadMapSite({ categury, name, titleBreadCrumb }) {
  return (
    <div className="bg-slate-200 font-Dana  pr-4 font-bold items-center container-custom m-auto  mt-5 rounded-md">
      <div className="flex h-10 gap-7 & > *:h-full items-center pt-2 pb-2 ">
        <Link to="/" className="flex items-center h-full w-12 breadcrumb-item">
          <svg className="w-5 h-5">
            <use href="#home"></use>
          </svg>
        </Link>
        <div className="flex items-center w-[90px] breadcrumb-item">
          <span className="ml-5 text-xs">
            {categury?.length ? "دسته بندی ها" : "مکمل ها"}
          </span>
        </div>

        {titleBreadCrumb?.length ? (
          <div className="flex items-center breadcrumb-item">
            <span className="ml-5 text-xs ">{titleBreadCrumb}</span>
          </div>
        ) : null}

        <div className="flex items-center breadcrumb-item">
          <span className="ml-5 text-xs ">{name}</span>
        </div>
      </div>
    </div>
  );
}
