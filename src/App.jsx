import "./App.css";
import TopBarMobile from "./assets/Components/TopBarMobile/TopBarMobile.";
import Slider from "./assets/Components/Slider/Slider";
import WrapperCateguryItem from "./assets/wrapperCateguryItme/wrapperCateguryItem";
import "./index.css";
import SectionsPreeSellProducts from "./assets/Components/SectionsPreeSellProducts/SectionsPreeSellProducts";
import BrandsSupplements from "./assets/Components/BrandsSupplements/BrandsSupplements";
import ArticlesSections from "./assets/Components/ArticlesSections/ArticlesSections";
import Footer from "./assets/Components/Footer/Footer";
import MenuMobile from "./assets/Components/MenuMobile/MenuMobile";

function App() {
  return (
    <>
      <TopBarMobile></TopBarMobile>
      <div className="mt-12">
        <Slider />
      </div>
      <WrapperCateguryItem />
      <div className=" container-custom pt-10 flex flex-col gap-3 pb-10 mt-10-custom">
        <SectionsPreeSellProducts />

        <BrandsSupplements />
        <ArticlesSections />
      </div>
      <div className="mb-0">
        <Footer />
      </div>
      <MenuMobile />
    </>
  );
}

export default App;
