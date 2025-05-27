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
  arrayUserBasket,
  setArrayUserBasket,
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

  let productForAddToUserBasket = null;
  const addToUserBasket = (ProductID) => {
    const productToAdd = allProducts.find((product) => product.id == ProductID);

    if (productToAdd) {
      setArrayUserBasket((prevBasket) => [...prevBasket, productToAdd]);
    }
  };
  const productID = params.ProductID;

  const filtredOnsProducts = allProducts.filter((item) => item.id == productID);

  useEffect(() => {}, [filtredOnsProducts]);

  useEffect(() => {
    setSrcProductStatus(filtredOnsProducts[0].img);
  }, []);
  const subImg = filtredOnsProducts[0].subImg.map((img) => img.img);
  console.log(subImg);

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

  return (
    <div className="bg-white flex-col mt-5-xutom sm:flex-row  p-5 flex justify-around container-custom">
      <ImagesAndSliderForProductsSinglePages
        setSrcImageProductsHandler={setSrcImageProductsHandler}
        subImg={subImg}
        srcProductStatus={srcProductStatus}
        setIsShowSliderMoreOnOneProducts={setIsShowSliderMoreOnOneProducts}
        filtredOnsProducts={filtredOnsProducts}
      />
      <div className="flex flex-col items-center & > *:w-full w-full sm:w-[70%] pr-4 pb-2 pl-2">
        <div className="flex flex-col gap-2 mt-5 sm:mt-0">
          <span className="text-md ">{filtredOnsProducts[0].name}</span>
          <div className="text-x p-4  sm:p-5 mb-5 mt-5 rounded-sm text-white tracking-wider flex items-center justify-center bg-slate-400">
            <span className="text-sm text-center sm:text-sm font-bold"></span>
            <div className="text-x p-5 mb-5 mt-5 rounded-sm text-white tracking-wider flex items-center justify-center bg-slate-400">
              <span className="text-xs sm:text-sm font-bold">
                بارکد محصول: 039442014320
              </span>
            </div>
          </div>
          <div className="flex justify-around flex-col sm:flex-row">
            <div className="flex justify-around">
              <NameAndCateguryNameAndMore
                subImg={subImg}
                filtredOnsProducts={filtredOnsProducts}
                getAlltest={getAlltest}
                setIdToast={setIdToast}
              />
              <ShoppingCartDetailAndOtherSpecifications
                filtredOnsProducts={filtredOnsProducts}
                titleForBasket={titleForBasket}
                setTitleForBasket={setTitleForBasket}
              />
            </div>
          </div>
        </div>
        <div
          className={`container-custom ${
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
          } fixed  bg-slate-300 top-0  w-full z-50`}
        >
          <OnsPageSliderProduct
            filtredOnsProducts={filtredOnsProducts[0]}
            setIsShowSliderMoreOnOneProducts={setIsShowSliderMoreOnOneProducts}
          />
        </div>
        {isShowPageShare ? (
          <div
            onClick={() => cancellActionsForShareProducts()}
            className="bg-black/40 fixed top-0 w-full h-full z-30"
          ></div>
        ) : null}
        <div
          ref={loaderOnPages}
          className=" fixed w-full h-full bg-teal-900 top-0 z-50 flex items-center justify-center"
        >
          <span className="loader w-60"></span>
        </div>
      </div>
    </div>
  );
}
