import React, { memo, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../../../../Data";
import OnsPageSliderProduct from "../OnsPageSliderProduct/OnsPageSliderProduct";
import ShareProducts from "../../ShareProducts/ShareProducts";
import TasteProducts from "../TasteProducts/TasteProducts";
import ShoppingCartDetailAndOtherSpecifications from "../ShoppingCartDetailAndOtherSpecifications/ShoppingCartDetailAndOtherSpecifications";
import NameAndCateguryNameAndMore from "../NameAndCateguryNameAndMore/NameAndCateguryNameAndMore";
import ImagesAndSliderForProductsSinglePages from "../ImagesAndSliderForProductsSinglePages/ImagesAndSliderForProductsSinglePages";

export default function OnsPageContent({
  allPrcie,
  addProductsToBasket,
  idProducts,
  setIdProducts,
}) {
  const [srcProductStatus, setSrcProductStatus] = useState();
  const [isShowSliderMoreOnOneProducts, setIsShowSliderMoreOnOneProducts] =
    useState(false);
  const [idToast, setIdToast] = useState(null);
  const params = useParams();
  const [isShowPageShare, setIsShowPageShare] = useState(false);
  let [titleForBasket, setTitleForBasket] = useState("");

  function setSrcImageProductsHandler(srcSerialImg) {
    console.log("srcSerialImg ====>", srcSerialImg);
    setSrcProductStatus(srcSerialImg);
  }

  const productID = params.ProductID;

  const filtredOnsProducts = allProducts.filter((item) => item.id == productID);

  useEffect(() => {}, [filtredOnsProducts]);

  useEffect(() => {
    setSrcProductStatus(filtredOnsProducts[0].img);
  }, []);
  const subImg = filtredOnsProducts[0].subImg.map((img) => img.img);

  function handlePageShare() {
    setIsShowPageShare(true);
    console.log(isShowPageShare);
  }

  function cancellActionsForShareProducts() {
    setIsShowPageShare(false);
  }

  const getAlltest = filtredOnsProducts[0].taste.map((tast) => tast);

  // ==============================================================

  const loaderOnPages = useRef(null);

  setTimeout(() => {
    loaderOnPages.current.classList += "opacity-0 hidden";
  }, 300);

  // ==============================================================

  // =======   Status Found Products    =========================

  const statusFoudProducts = filtredOnsProducts[0].taste.filter(
    (item) => item.id === idToast
  );

  if (statusFoudProducts.length > 0) {
    const result = statusFoudProducts[0];
    console.log(result.status);

    if (result.status == 0) {
      titleForBasket = "از این طعم موجودی نداریم 😭";
      setTimeout(() => {
        setTitleForBasket("");
      }, 2000);
    } else {
      titleForBasket = " افزودن به سبد خرید";
      setTimeout(() => {
        setTitleForBasket("");
      }, 2000);
    }
  }
  //

  // const resultAfterFoundStatusTast =

  // ==============================================================

  const btnAferLoadedPage = useRef(null);
  setTimeout(() => {
    btnAferLoadedPage.current.classList += " aftreLoadedOnsPageUserBasketBtn";
  }, 200);
  setTimeout(() => {
    btnAferLoadedPage.current.classList +=
      " aftreLoadedOnsPageUserBasketBtnLast";
  }, 500);

  // ================  On Scroll =====================================
  const [isActiveScroll, setIsActiveScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 720) {
        return setIsActiveScroll(true);
      } else if (window.scrollY < 720) {
        return setIsActiveScroll(false);
      } else if (window.scrollY > 985) {
        return setIsActiveScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // console.log(isActiveScroll);

  return (
    <div className="">
      <div className="bg-white flex-col mt-5-xutom sm:flex-row  p-5 flex justify-around container-custom">
        <ImagesAndSliderForProductsSinglePages
          isShowPageShare={isShowPageShare}
          setIsShowPageShare={setIsShowPageShare}
          setSrcImageProductsHandler={setSrcImageProductsHandler}
          subImg={subImg}
          srcProductStatus={srcProductStatus}
          setIsShowSliderMoreOnOneProducts={setIsShowSliderMoreOnOneProducts}
          filtredOnsProducts={filtredOnsProducts}
        />
        <div className="flex flex-col items-center & > *:w-full w-full sm:w-[70%] pr-4 pb-2 pl-2">
          <div className="flex flex-col gap-2 mt-5 sm:mt-0">
            <span className="text-md mt-5 mb-5 ">
              {filtredOnsProducts[0].name}
            </span>
            <div className="text-x p-3  sm:p-5 rounded-sm text-white tracking-wider flex items-center justify-center bg-slate-400">
              <span className="text-sm text-center sm:text-sm font-bold"></span>
              <div className="text-x p-5  rounded-sm text-white tracking-wider flex items-center justify-center bg-slate-400">
                <span className="text-xs sm:text-sm font-bold">
                  بارکد محصول: {Math.ceil(Math.random() * 100000000000000000)}
                </span>
              </div>
            </div>
            <div className="flex justify-around flex-col sm:flex-row">
              <div className="flex justify-around flex-col sm:flex-row">
                <NameAndCateguryNameAndMore
                  subImg={subImg}
                  filtredOnsProducts={filtredOnsProducts}
                  getAlltest={getAlltest}
                  setIdToast={setIdToast}
                />
                <ShoppingCartDetailAndOtherSpecifications
                addProductsToBasket={addProductsToBasket}
                  filtredOnsProducts={filtredOnsProducts}
                  titleForBasket={titleForBasket}
                  setTitleForBasket={setTitleForBasket}
                />
              </div>
            </div>
          </div>
          <div
            className={`container-custom mx-auto ${
              isShowPageShare
                ? "opacity-100 visible transitions-all"
                : "opacity-0 invisible h-10 overflow-hidden transitions-Custom"
            }`}
          >
            <ShareProducts
              cancellActionsForShareProducts={cancellActionsForShareProducts}
            />
          </div>
          <div
            className={`${
              isShowSliderMoreOnOneProducts
                ? "ShowSliderMoreOnOneProducts transition-all h-[100vh]"
                : "h-[50vh] transition-all opacity-0 invisible transitions-Custom"
            } fixed  bg-slate-300 top-0  w-full z-50 right-0`}
          >
            <OnsPageSliderProduct
              filtredOnsProducts={filtredOnsProducts[0]}
              setIsShowSliderMoreOnOneProducts={
                setIsShowSliderMoreOnOneProducts
              }
            />
          </div>
          {isShowPageShare ? (
            <div
              onClick={() => cancellActionsForShareProducts()}
              className="bg-black/40 fixed top-0 w-full h-full z-30 right-0"
            ></div>
          ) : null}
          <div
            ref={loaderOnPages}
            className=" fixed w-full h-full right-0 bg-teal-900 top-0 z-50 flex items-center justify-center"
          >
            <span className="loader w-60"></span>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div
          ref={btnAferLoadedPage}
          onClick={() => addProductsToBasket(productID)}
          className={` gap-0.5 flex items-center justify-center ${
            isActiveScroll
              ? "opacity-0 transitions-Custom fixed"
              : "opacity-100 fixed"
          }  bottom-10 w-[80%] h-10 text-center flex items-center justify-center cursor-pointer rounded-t-sm hover:bg-green-800 transition-all bg-green-700 text-white z-10`}
        >
          <svg className="w-6 h-6">
            <use href="#shopping-cart"></use>
          </svg>
          افرودن به سبد خرید
        </div>
      </div>
    </div>
  );
}
