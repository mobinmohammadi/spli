import React, { Component, useEffect, useRef, useState } from "react";
import InstagramStoriesModal from "../StoryFicher/StoryFicher";
import { papularSearchesInwebsite, preSellProducts } from "../../../Data.js";
import TopSixSearchInWebsite from "../TopSixSearchInWebsite/TopSixSearchInWebsite";
import BoxForResultSearches from "../BoxForResultSearches/BoxForResultSearches.jsx";
import BoxesForUserBaskets from "./BoxesForUserBaskets/BoxesForUserBaskets.jsx";
export default function TopBarMobile({ allPrices, arrayUserBasket  }) {
  const [arrayResultBeforSearch, setArrayResultBeforSearch] = useState([]);
  const [allPrice , setAllPrice] = useState(null)
  const [searchValue, setSearchValue] = useState("");
  const wrapperResultSearchs = useRef();
  const wrapperDetailsSearch = useRef();
  const btnOpenUserBasket = useRef();
  const modalUserBasket = useRef();
  const [isShowLayerModals, setIsShowLayerModals] = useState(false);

  

  console.log(allPrices);

  const loaderSearch = useRef();
  const [isShowLayer, setIsShowLayer] = useState(false);

  const openModalUserbasket = () => {
    modalUserBasket.current.classList.add("left-0");
    modalUserBasket.current.classList.add("style-modalOpen");
    setIsShowLayerModals(true);
  };
  const closeModalUserBasket = () => {
    modalUserBasket.current.classList.remove("left-0");
    modalUserBasket.current.classList.add("-left-80");
    modalUserBasket.current.classList.add("style-modalOpen");
    setIsShowLayerModals(false);
  };

  const closeModals = () => {
    modalUserBasket.current.classList.remove("left-0");
    modalUserBasket.current.classList.add("-left-80");
    modalUserBasket.current.classList.add("style-modalOpen");
    setIsShowLayerModals(false);
  };

  const ShowSearchModals = () => {
    showDetailsSearch.current.classList.remove("hidden");
    showDetailsSearch.current.style.transition = "all 0.5s ease";
    setTimeout(() => {
      showDetailsSearch.current.style.top = "100%";
    }, 1);
  };
  const notFoundItemSearchs = useRef();
  const closeModaleSearch = () => {
    showDetailsSearch.current.style.top = "140%";
    showDetailsSearch.current.style.transition = "all 0.5s ease-in-out";
    setTimeout(() => {
      showDetailsSearch.current.classList.add("hidden");
    }, 120);
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

  const showDetailsSearch = useRef();



  return (
    <div className=" border-b-4 block  border-solid border-sky-700 bg-white fixed w-full z-20 ">
      <div className="flex flex-col pt-2 pb-2">
        <img className="" src="./s/offer.gif" alt="" />

        <div className="pst  bg-white   pl-5  flex  items-center justify-between">
          <div className="flex z-10 w-full items-center  justify-between md:w-[50%] items-right md:justify-right  ">
            <img
              className="w-15"
              src="https://www.svgrepo.com/show/489305/gym.svg"
              alt=""
            />
            <div
              ref={wrapperResultSearchs}
              className="bg-slate-100 md:w-[24rem] relative h-7 md:h-10 flex item-center justify-center rounded-md"
            >
              <input
                onClick={() => {
                  ShowSearchModals();
                  setIsShowLayer(true);
                }}
                onChange={(e) => serchingToProducts(e.target.value)}
                value={searchValue}
                type="text"
                className="w-[90%] pl-10 text-sm  outline-0 pr-2"
                placeholder="جستوجو ..."
              />

              <div className="absolute pr-2  pl-2 bg-red-500 flex items-center   text-white h-full left-0 rounded-tl-md rounded-bl-md cursor-pointer">
                <svg className="w-4 h-4 md:w-6 md:h-6">
                  <use href="#search-normal"></use>
                </svg>
              </div>
              <div
                ref={showDetailsSearch}
                className="absolute pt2 pb-2 transition-all hidden shadow-2xl  rounded-b-md text-xs pt-2  bg-slate-100 text-zinc-700   rounded-md z-10  w-full top-[130%]"
              >
                <div
                  ref={notFoundItemSearchs}
                  className="hidden items-center justify-center bg-red-500 font-bold text-md text-white pt-2 pb-2 "
                >
                  <span>موردی یافت نشد 😑</span>
                </div>
                <div
                  ref={loaderSearch}
                  className="w-full hidden absolute h-72  items-center justify-center bg-zinc-600"
                >
                  <span class="loader"></span>
                </div>
                {arrayResultBeforSearch.length ? (
                  arrayResultBeforSearch.map((item) => (
                    <div className="pt-2 pb-2">
                      <BoxForResultSearches {...item} />
                    </div>
                  ))
                ) : (
                  <div
                    ref={wrapperDetailsSearch}
                    className="flex flex-col gap-4 pr-2 md:pr-5 pl-2 md:pl-5"
                  >
                    <span className=" font-bold pt-5">جستوجو های برتر</span>
                    <span className="bg-slate-200 w-full h-[2px] "></span>
                    <div className="border-b-2 border-solid border-slate-200 pb-4 grid s:grid-cols-2 x:grid-cols-4 xs:grid-cols-4 md:grid-cols-5 mmd:grid-cols-7  gap-2">
                      {papularSearchesInwebsite.map((item) => (
                        <TopSixSearchInWebsite {...item} />
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
          <div className=" md:flex hidden & > *:transition-all  & > *:border-1 & > *:border-solid & > *:border-slate-200 & > *:rounded-md & > *:p-2 gap-2 & > *:flex & > *:items-center & > *:gap-1 & > *:cursor-pointer">
            <div className="relative group">
              <div className="">
                <div className=" group hover:border-red-500 flex items-center gap-0.5 hover:text-red-500">
                  <svg className=" w-5 h-5 ">
                    <use href="#user"></use>
                  </svg>
                  <span className="pb-1  ">پنل کاربری</span>
                  <div className="absolute group-hover:opacity-100 z-20 opacity-0 diora top-7 group-hover:top-full transition-all border-solid overflow-hidden rounded-b-xl rounded-t-md border-t-2 border-amber-400 w-52  left-0 flex flex-col  bg-zinc-700 text-white">
                    <span className="border-t-1 border-solid border-slate-200 pt-4"></span>
                    <span className="text-xs pr-2 pb-2 pt-2 hover:bg-slate-400   ">
                      پنل کاربری
                    </span>
                    <span className="text-xs pr-2 pt-2 pb-2  hover:bg-slate-400 ">
                      سفارشات من
                    </span>
                    <span className="text-xs pr-2 pt-2 pb-2 hover:bg-slate-400  ">
                      علاقه مندی های من
                    </span>
                    <span className="text-xs bg-red-600 pt-2 pb-2 pr-2 p-0">
                      خروج از حساب
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute group-hover:opacity-100  opacity-0  top-full left-0">
                <div className=" text-white pr-1 pt-1 bg-zinc-800 shadow-2xl left-0 top-full w-60 h-30 rounded-md">
                  <div className=" border-b-1 pb-2 border-solid border-solid-200">
                    <span className="text-xs">سبد خرید شما</span>
                  </div>
                  <div className="flex justify-center items-center h-[77%]">
                    <span className="text-xs">سبد خرید شما خالی میباشد 😥</span>
                  </div>
                </div>
              </div>
              <svg
                ref={btnOpenUserBasket}
                onClick={() => openModalUserbasket()}
                className="w-5 h-5"
              >
                <use href="#shopping-cart"></use>
              </svg>
            </div>
          </div>
          <div
            ref={btnOpenUserBasket}
            onClick={() => openModalUserbasket()}
            className="relative border-1 pt-1 pb-1 flex md:hidden pr-6 pl-2 mr-2 rounded-l-sm cursor-pointer bg-rose-600 text-white rounded-r-md"
          >
            <div className="w-5 h-5 bg-zinc-700 transition-all rounded-full text-center flex justify-center items-center absolute -right-2 -top-3">
              <span>{arrayUserBasket.length}</span>
            </div>
            <svg className="w-5 h-5">
              <use href="#shopping-cart"></use>
            </svg>
          </div>
        </div>
      </div>
      <div
        ref={modalUserBasket}
        className="fixed w-72 -left-80 h-[100vh] z-20 pt-3 shadow-2xl bg-white top-0 "
      >
        <div className="flex relative  justify-between flex-col h-full pb-2">
          <svg
            onClick={() => {
              setIsShowLayerModals(false);
              closeModalUserBasket();
            }}
            className="w-8 h-8 absolute left-full cursor-pointer shadow-2xl bg-zinc-800 top-0 text-slate-200 rounded-r-md "
          >
            <use href="#x-mark"></use>
          </svg>
          <div className="h-full">
            <div className="border-b border-solid border-zinc-600 pb-4">
              <span className="pr-2 text-xs">سبد خرید شما</span>
            </div>

            <div className="mt-4 h-[500px] w-full overflow-y-auto">
              {arrayUserBasket ? (

                arrayUserBasket.map((item) => (
                  <BoxesForUserBaskets {...item} />
                ))
              ): null}
            </div>
          </div>
          <div className="w-[90%] m-auto flex flex-col">
            <div className="flex justify-between pb-2">
              <span className="font-bold text-md">قیمت کل : </span>
              <span className="font-bold text-md">{allPrices.toLocaleString()} تومان</span>
            </div>
            <div className=" bg-green-600 flex justify-center  rounded-sm & > *:cursor-pointer hover:bg-green-700 transition-all cursor-pointer p-3">
              <button className="text-white ">تسویه حساب</button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="app">
        <h1>استوری محصولات ما</h1>
        <InstagramStoriesModal product={preSellProducts}
       
        />
      </div> */}
      {isShowLayer ? (
        <div
          onClick={() => {
            closeModaleSearch();
          }}
          className="w-full h-full bg-black/1 fixed top-0 z-[5]"
        ></div>
      ) : (
        ""
      )}
      {isShowLayerModals ? (
        <div
          onClick={() => {
            closeModals();
          }}
          className="w-full h-full bg-black/50 fixed top-0 z-[5]"
        ></div>
      ) : (
        ""
      )}
    </div>
  );
}
