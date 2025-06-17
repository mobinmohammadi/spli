import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OnsPageProducts from "./assets/Components/OnsPageProducts/OnsPageProducts.jsx";
import FilterBrands from "./Pages/Home/FilterBrands/FilterBrands.jsx";
import CategurtByProducts from "./Pages/Home/CategurtByProducts/CategurtByProducts.jsx";
import { CartProvider } from "./assets/Context/CartContext.jsx";
import NotFoundPage from "./Pages/Home/NotFoundPage/NotFoundPage.jsx";
import { ToastContainer } from "react-toastify";
import PurchaseProcessCart from "./Pages/Home/PurchaseProcessCart/PurchaseProcessCart.jsx";
import TheSeconedStepOfTheShoppingCart from "./Pages/Home/PurchaseProcessCart/TheSeconedStepOfTheShoppingCart/TheSeconedStepOfTheShoppingCart.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/onspageproduct/:ProductID"
          element={<OnsPageProducts />}
        />
        <Route path="/productsBrand/:BrandName" element={<FilterBrands />} />
        <Route
          path="/categuryByProducts/:categuryProduct"
          element={<CategurtByProducts />}
        />
        <Route path="/cart" element={<PurchaseProcessCart />} />
        <Route path="/checkout/billingaddress" element={<TheSeconedStepOfTheShoppingCart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </CartProvider>
    <ToastContainer autoClose={2000} position="top-left" />
  </BrowserRouter>
);
