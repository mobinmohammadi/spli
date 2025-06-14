import React, { useEffect, useRef, useState } from "react";
import BoxesForUserBaskets from "./../BoxesForUserBaskets/BoxesForUserBaskets";

export default function BasketMobile({
  setIsShowLayerModals,
  closeModalUserBasket,
  cart,
  modalUserBasket,
}) {

  const [allPrice, setAllPrice] = useState(0);

  function handleAllPriceInBasket() {
    const totalePrice = cart
      .flatMap((item) => item.price * item.count)
      .reduce((acc, num) => acc + num, 0);
    setAllPrice(totalePrice);
  }

  JSON.parse(localStorage.getItem("cart"))


  useEffect(() => {
    handleAllPriceInBasket();
  }, [cart]);

  return (
    <div
      ref={modalUserBasket}
      className="fixed w-72 font-Dana -left-80 h-[100vh] z-20 pt-3 shadow-2xl bg-white top-0 "
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
          {cart?.length ? (
            <div className="mt-4 h-[500px] w-full overflow-y-auto">
              {cart
                ? cart.map((item) => <BoxesForUserBaskets {...item} />)
                : null}
            </div>
          ) : (
            <div className="flex items-center justify-center h-[70%]">
              <img src="./../../gif/emptyBK.gif" alt="" />
            </div>
          )}
        </div>
        {cart?.length ? (
          <div className="w-[90%] m-auto flex flex-col">
            <div className="flex justify-between pb-2">
              <span className="font-bold text-md">قیمت کل : </span>

              <span className="font-bold text-md">
                {allPrice.toLocaleString()} تومان
              </span>
            </div>
            <div className=" bg-green-600 flex justify-center  rounded-sm & > *:cursor-pointer hover:bg-green-700 transition-all cursor-pointer p-3">
              <button className="text-white ">تسویه حساب</button>
            </div>
          </div>
        ) : (
          <div className="w-[90%] pt-2 pb-2 justify-center items-center rounded-md m-auto flex flex-col bg-slate-300">
            <span>سبد خرید خالی است 🥱</span>
          </div>
        )}
      </div>
    </div>
  );
}
