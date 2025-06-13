import React, { useEffect, useState } from "react";
import TopBarCateguryFilter from "./TopBarCateguryFilter/TopBarCateguryFilter";
import ItemSliderPreeSell from "./../../ItemSliderPreeSell/ItemSliderPreeSell";
import { allProducts } from "../../../../Data";
export default function ContentCategurtProducts() {
  const [titleCategury, setTitleCategury] = useState("پیش فرض");
  useEffect(() => {
    console.log(titleCategury);
  }, [titleCategury]);
  return (
    <div className="flex flex-col items-center w-full pb-5 bg-white ">
      <div className="font-Dana pr-3 pt-3 rounded-sm text-xs   w-full">
        <TopBarCateguryFilter
          titleCategury={titleCategury}
          setTitleCategury={setTitleCategury}
        />
      </div>
      <div className="grid w-full grid-cols-2 x:grid-cols-3 sm:grid-cols-4 justify-center items-center gap-3 mt-5 pr-3 pl-3">
        {allProducts.map((item) => (
          <ItemSliderPreeSell items={item} />
        ))}
      </div>
    </div>
  );
}
