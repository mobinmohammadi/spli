import React from "react";
import TheFirstStepOfTheShoppingCart from "./TheFirstStepOfTheShoppingCart/TheFirstStepOfTheShoppingCart";
import TopBarMobile from "../../../assets/Components/TopBarMobile/TopBarMobile.";
import CheckoutProgressBar from "./CheckoutProgressBar/CheckoutProgressBar";
import BradCrumbCart from "./BradCrumbCart/BradCrumbCart";

export default function PurchaseProcessCart() {

  return (
    <div className="font-Dana">
      <TopBarMobile />
      <div className="pt-22 flex flex-col gap-7 text-sm font-Dana-Bold container-custom pr-3 pl-3">
        <BradCrumbCart/>
        <CheckoutProgressBar currentStep={1} />

        <TheFirstStepOfTheShoppingCart />
      </div>
    </div>
  );
}
