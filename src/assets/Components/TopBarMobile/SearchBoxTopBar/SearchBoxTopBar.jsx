import React, { useEffect, useRef, useState } from "react";
import { papularSearchesInwebsite , preSellProducts } from "../../../../Data.js";
import BoxForResultSearches from "../../BoxForResultSearches/BoxForResultSearches.jsx";
import TopSixSearchInWebsite from "../../TopSixSearchInWebsite/TopSixSearchInWebsite.jsx";

export default function SearchBoxTopBar({setIsShowLayer , closeModaleSearch , showDetailsSearch}) {

  const [arrayResultBeforSearch, setArrayResultBeforSearch] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const notFoundItemSearchs = useRef();

  const loaderSearch = useRef();

  const wrapperResultSearchs = useRef();
  const wrapperDetailsSearch = useRef();

  const ShowSearchModals = () => {
    showDetailsSearch.current.classList.remove(
      "hiddenSearchWrapper",
      "invisible"
    );
    showDetailsSearch.current.classList.add("showSearchWrapper");
  };
  const serchingToProducts = (e) => {
    setSearchValue(e);
    console.log(searchValue);

    {
      if (searchValue.length > 3) {
        loaderSearch.current.classList.remove("hidden");
        loaderSearch.current.classList.add("flex");

        setTimeout(() => {
          loaderSearch.current.classList.add("hidden");
        }, 1000);
        const resultSerching = preSellProducts.filter((item) =>
          item.name.includes(searchValue)
        );

        console.log(resultSerching);
        setArrayResultBeforSearch(resultSerching);
        if (!arrayResultBeforSearch.length) {
          setTimeout(() => {
            notFoundItemSearchs.current.classList.remove("hidden");
            notFoundItemSearchs.current.classList.add("flex");
          }, 1000);
          wrapperDetailsSearch.current.classList.add("hidden");
        } else {
          notFoundItemSearchs.current.classList.remove("flex");
          notFoundItemSearchs.current.classList.add("hidden");
        }
      }
    }
  };

  const lagikForSearchInput = () => {
    if (searchValue.length >= 5 && !arrayResultBeforSearch.length) {
      return (
        <div
          ref={notFoundItemSearchs}
          className="hidden z-10 items-center justify-center bg-red-500 font-bold text-md text-white pt-2 pb-2 "
        >
          <span>موردی یافت نشد 😑</span>
        </div>
      );
    } else if (searchValue.length >= 2 && searchValue.length <= 4) {
      return (
        <div
          ref={notFoundItemSearchs}
          className="hidden items-center justify-center bg-red-500 font-bold text-md text-white pt-2 pb-2 "
        >
          <span>مقدار وارد شده شما کمتر از 5 کاراکتر است 🤔</span>
        </div>
      );
    }
  };
  useEffect(() => {
    lagikForSearchInput();
  }, [searchValue]);

  return (
    <div className="flex z-10 w-full items-center  sm:justify-between md:w-[50%] items-right md:justify-right  ">
      <img
        className="w-15"
        src="https://www.svgrepo.com/show/489305/gym.svg"
        alt=""
      />
      <div
        ref={wrapperResultSearchs}
        className="bg-slate-100 sm:flex hidden md:w-[24rem] w-full relative h-7 md:h-10 item-center justify-center rounded-md"
      >
        <input
          onClick={() => {
            ShowSearchModals();
            setIsShowLayer(true);
          }}
          onChange={(e) => serchingToProducts(e.target.value)}
          value={searchValue}
          type="text"
          className="w-full pl-10 pr-2 text-x sm:text-xs font-Dana  outline-0 "
          placeholder="در بین هزاران محصول ما سرچ بزنید ..."
        />

        <div className="absolute pr-2  pl-2 bg-red-500 flex items-center   text-white h-full left-0 rounded-tl-md rounded-bl-md cursor-pointer">
          <svg className="w-4 h-4 md:w-6 md:h-6">
            <use href="#search-normal"></use>
          </svg>
        </div>
        <div
          ref={showDetailsSearch}
          className="absolute pt2 pb-2 transition-all hiddenSearchWrapper invisible shadow-2xl  rounded-b-md text-xs pt-2  bg-slate-100 text-zinc-700   rounded-md z-10  w-full  top-[150%]"
        >
          {lagikForSearchInput()}
          <div
            ref={loaderSearch}
            className="w-full flex-col gap-10 font-Morabba-Bold hidden absolute h-72  items-center justify-center bg-white"
          >
            <span className="loader"></span>
            <div className="text-center pl-5">
              در حال سرچ لطفا منتظر بمانید ....
            </div>
          </div>
          {arrayResultBeforSearch.length ? (
            <div className="font-Dana">
              <div className="border-slate-400 w-full r-5 border-b-2 border-solid p-2">
                <span className=" font-Dana-Bold flex gap-1 text-x sm:text-sm">
                  <span className="text-green-600 ">
                    {arrayResultBeforSearch.length}
                  </span>
                  <span className="text-gray-700">مورد یافت شد </span>
                </span>
              </div>
              {arrayResultBeforSearch.map((item ,index) => (
                <div className="pt-2 pb-2">
                  <BoxForResultSearches key={index + 1} {...item} />
                </div>
              ))}
            </div>
          ) : (
            <div
              ref={wrapperDetailsSearch}
              className="flex flex-col gap-4 pr-2 md:pr-5 pl-2 md:pl-5"
            >
              <span className=" font-bold pt-5">جستوجو های برتر</span>
              <span className="bg-slate-200 w-full h-[2px] "></span>
              <div className="border-b-2 border-solid border-slate-200 pb-4 grid s:grid-cols-2 x:grid-cols-4 xs:grid-cols-4 md:grid-cols-5 mmd:grid-cols-7  gap-2">
                {papularSearchesInwebsite.map((item , index) => (
                  <TopSixSearchInWebsite key={index + 1} {...item} />
                ))}
              </div>
              <div className="flex justify-between border-b-2 border-slate-200 border-dashed pb-4">
                <span className="font-bold">نتیجه جستوجو</span>
                <span className="font-bold text-red-400">حذف</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
