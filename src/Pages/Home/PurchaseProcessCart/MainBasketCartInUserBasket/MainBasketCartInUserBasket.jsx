import React, { useContext } from "react";
import { CartContext } from "../../../../assets/Context/CartContext";

export default function MainBasketCartInUserBasket({item}) {

    const {id, img,name, src , price ,count} = item
    const {removeInBasket} = useContext(CartContext)

  return (
    <div className="border-1 border-slate-400 border-solid pr-2 pt-3 pb-2 pl-2 rounded-sm">
      <div className="flex gap-1   ">
        <img
          className="w-20 h-20 rounded-full "
          src={img}
          alt=""
        />
        <div className="flex flex-col h-full justify-between">
          <span className="text-sm pb-5">
            {name}
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-xs">1٬890٬000</span>
            <div className="text-xs flex gap-0.5">
              <span>{price.toLocaleString()}</span>
              <span>تومان</span>
            </div>
            <div className="flex gap-0.5 items-center text-x">
                <span>{count}</span>
                <span>از همین محصول در سبد خرید شما است</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end w-full items-end gap-3">
        <div className=" flex flex-col">
          <span>تعداد</span>
          <select
            value=""
            className="w-16  border-solid border-slate-400 border-1 rounded-sm cursor-pointer"
          >
            <option name="0" id="">
              1
            </option>
            <option name="0" id="">
              2
            </option>
            <option name="0" id="">
              3
            </option>
            <option name="0" id="">
              4
            </option>
          </select>
        </div>
        <div onClick={() => removeInBasket(id)} className="pr-4 pl-4 h-6.5 flex items-center cursor-pointer hover:bg-[#e41e44] transition-all hover:text-white border-[#e41e44] border-solid rounded-sm border-1  text-[#e41e44] text-x">
          <span className="  cursor-pointer">
            حذف
          </span>
        </div>
      </div>
    </div>
  );
}
