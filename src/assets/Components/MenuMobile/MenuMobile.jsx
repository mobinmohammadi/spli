import React, { useEffect, useState } from "react";
import ShowWrapperSearch from "../NavMenuBeautiful/ShowWrapperSearch";

export default function MenuMobile() {
  const [isShowSearchBox, setIsShowSearchBox] = useState(null);
  const cancelActions = () => {
    setIsShowSearchBox(false);
  };

  return (
    <>
      <ShowWrapperSearch
        cancelActions={cancelActions}
        isShowSearchBox={isShowSearchBox}
      />

      <div className="w-full & > *:cursor-pointer pb-2 flex justify-between fixed bottom-0 z-10 rounded-t-xl bg-zinc-700 text-white pt-2 pr-2 r pl-2">
        <div className="flex flex-col max-w-24 gap-1 items-center">
          <svg className="w-5 h-5 text-white">
            <use href="#user-home"></use>
          </svg>
          <span>پنل کابری</span>
        </div>
        <div
          onClick={() => setIsShowSearchBox(true)}
          className="flex flex-col max-w-24 gap-1 items-center"
        >
          <svg className="w-5 h-5 text-white">
            <use href="#search-normal"></use>
          </svg>
          <span>جستوجو</span>
          <ShowWrapperSearch
            cancelActions={cancelActions}
            isShowSearchBox={isShowSearchBox}
          />
        </div>
        <div className="flex flex-col max-w-24 gap-1 items-center">
          <svg className="w-5 h-5 text-white">
            <use href="#cube-transparent"></use>
          </svg>
          <span>دسته بندی ها</span>
        </div>
        <div className="flex flex-col max-w-24 gap-1 items-center">
          <svg className="w-5 h-5 text-white">
            <use href="#shopping-bag"></use>
          </svg>
          <span>سبد خرید</span>
        </div>
      </div>
    </>
  );
}
