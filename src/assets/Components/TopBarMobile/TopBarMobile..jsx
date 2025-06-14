import React, {
  Component,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { CartContext } from "../../Context/CartContext.jsx";
import BasketMobile from "./BasketMobile/BasketMobile.jsx";
import SearchBoxTopBar from "./SearchBoxTopBar/SearchBoxTopBar.jsx";
export default function TopBarMobile({ allPrices, arrayUserBasket }) {
  const modalUserBasket = useRef();
  const showDetailsSearch = useRef();

  const btnOpenUserBasket = useRef();
  const [isShowLayerModals, setIsShowLayerModals] = useState(false);

  const [isShowLayer, setIsShowLayer] = useState(false);

  const openModalUserbasket = () => {
    modalUserBasket.current.classList.add("left-0", "style-modalOpen");
    setIsShowLayerModals(true);
  };
  const closeModalUserBasket = () => {
    modalUserBasket.current.classList.remove("left-0");
    modalUserBasket.current.classList.add("-left-80", "style-modalOpen");
    setIsShowLayerModals(false);
  };

  const closeModals = () => {
    modalUserBasket.current.classList.remove("left-0");
    modalUserBasket.current.classList.add("-left-80", "style-modalOpen");
    setIsShowLayerModals(false);
  };

  const closeModaleSearch = () => {
    showDetailsSearch.current.classList.remove("showSearchWrapper");
    showDetailsSearch.current.classList.add("hiddenSearchWrapper", "invisible");
  };

  const { cart , removeInBasket } = useContext(CartContext);

  return (
    <div className=" border-b-4 block border-solid border-sky-700 bg-white fixed w-full z-20 ">
      <div className="flex flex-col pt-2 pb-2">
        <img className="" src="./s/offer.gif" alt="" />

        <div className="pst  bg-white   pl-5  flex  items-center justify-between">
          <SearchBoxTopBar
            showDetailsSearch={showDetailsSearch}
            closeModaleSearch={closeModaleSearch}
            setIsShowLayer={setIsShowLayer}
          />
          <div className=" md:flex hidden & > *:transition-all  & > *:border-1 & > *:border-solid & > *:border-slate-200 & > *:rounded-md & > *:p-2 gap-2 & > *:flex & > *:items-center & > *:gap-1 & > *:cursor-pointer">
            <div className="relative hover:border-red-500 hover:text-red-500">
              <div className="">
                <div className="flex items-center ">
                  <svg className=" w-5 h-5 ">
                    <use href="#user"></use>
                  </svg>
                  <span className=" text-sm pr-2 pl-2 font-Dana ">
                    ورود | ثبت نام
                  </span>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute  opacity-0 group-hover:visible transition-all group-hover:opacity-100 invisible top-full left-0">
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
              <span className="absolute -top-2 -right-2 bg-red-500 p-1 font-Dana rounded-full pr-2 pl-2 text-x text-white">{cart.length}</span>
            </div>
          </div>
          <div
            ref={btnOpenUserBasket}
            onClick={() => openModalUserbasket()}
            className="relative border-1 pt-1 pb-1 flex md:hidden pr-6 pl-2 mr-2 rounded-l-sm cursor-pointer bg-rose-600 text-white rounded-r-md"
          >
            {arrayUserBasket?.length ? (
              <div className="w-5 h-5 bg-zinc-700 transition-all rounded-full text-center flex justify-center items-center absolute -right-2 -top-3">
                <span>{arrayUserBasket?.length}</span>
              </div>
            ) : null}
            <svg className="w-5 h-5">
              <use href="#shopping-cart"></use>
            </svg>
          </div>
        </div>
      </div>
      <BasketMobile
        modalUserBasket={modalUserBasket}
        closeModals={closeModals}
        cart={cart}
        setIsShowLayerModals={setIsShowLayerModals}
        closeModalUserBasket={closeModalUserBasket}
      />

      {isShowLayer && (
        <div
          onClick={closeModaleSearch}
          className={` ${
            isShowLayer ? "w-full h-full  bg-black/1 fixed top-0" : "w-0 h-0"
          } `}
        ></div>
      )}
      {/* {isShowLayerModals ? (
        <div
          onClick={() => {
            closeModals();
          }}
          className="w-full h-full  bg-black/50 fixed top-0 z-[5]"
        ></div>
      ) : (
        ""
      )} */}
    </div>
  );
}
