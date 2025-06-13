import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function propsliderPreeSell(props) {
  
  const btnAddToBasket = useRef(null);
  const loaderAddToBasket = useRef(null);
  const disibledAddToBasketBtn = useRef(null);

  const loaderHandler = (e) => {
    console.log("ljksjvji ===> ", props.items.id);

    disibledAddToBasketBtn.current.classList.add("opacity-100");
    disibledAddToBasketBtn.current.classList.add("transitions-all");
    disibledAddToBasketBtn.current.classList.add("visible");

    loaderAddToBasket.current.classList.remove("opacity-0");
    btnAddToBasket.current.classList.add("hidden");
    btnAddToBasket.current.classList.add("hidden");
    console.log(loaderAddToBasket.current);
    setTimeout(() => {
      loaderAddToBasket.current.classList.add("opacity-0");
      btnAddToBasket.current.classList.remove("hidden");
      console.log(loaderAddToBasket.current);
      disibledAddToBasketBtn.current.classList.remove("opacity-100");
      disibledAddToBasketBtn.current.classList.remove("transitions-all");
      disibledAddToBasketBtn.current.classList.remove("visible");
    }, 1500);
  };

  let navigate = useNavigate();
  const goto = () => {
    navigate(`/onspageproduct/${props.items.id}`);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 150);
  };
  return (
    <div>
      <div className="max-w-44 bg-slate-300 rounded-sm overflow-hidden flex items-center flex-col props-center gap-2 ">
        <img className="w-32 sm:w-full rounded-md" src={`../${props.items.img}`} alt="" />
        <div className="flex flex-col w-full font-Dana ">
          <div className="flex flex-col pr-1">
            <span
              onClick={() => goto()}
              className="max-w-[130px] text-right overflow-hidden max-h-[1.4em] text-xs inline-block text-[13px]"
            >
             نام : {props.items.name} 
            </span>
            <div className="flex justify-between gap-3 props-center mt-2">
              <span className="text-xs">قیمت : {props.items.price} </span>
            </div>
          </div>
          <div
            onClick={() => loaderHandler(props.addToUserBasket(props.items.id))}
            className="relative mt-3 bg-green-500 rounded-sm h-8 flex items-center justify-center"
          >
            <button
              ref={btnAddToBasket}
              className=" cursor-pointer w-full h-full text-xs pt-2 pb-2   text-white"
            >
              افزودن به سبد خرید
            </button>

            <div
              ref={disibledAddToBasketBtn}
              className="w-full h-full flex items-center justify-center cursor-no-drop  text-xs opacity-0 pt-2 pb-2 absolute top-0 bg-slate-300 rounded-sm text-white invisible"
            >
              <span
                ref={loaderAddToBasket}
                className="loader-addToBasket opacity-0 absolute"
              ></span>
            </div>
          </div>
        </div>
        {/* افزودن به سبد خرید */}
      </div>
    </div>
  );
}
