
import FilterSideBar from "@/components/shopParts/filterOption";
import FilterBar from "@/components/shopParts/filterBar";
import AllProducts from "@/components/shopParts/allProducts";
import Discount from "@/components/shopParts/discount";
import PromotionalAds from "@/components/shopParts/promotionalAds";
import PromotionalAdsSecond from "@/components/shopParts/promotionalAdsSecond";

const Shop = () => {
  return (
    <div className="bg-[#f8f8f8] relative">
      {/* Page Layout */}
      <div className="grid max-w-7xl items-start py-8 lg:py-16 mx-auto px-2 lg:grid-cols-4 gap-6">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block  col-span-1">
          <FilterSideBar/>
          <PromotionalAdsSecond/>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 ">
          <FilterBar/>
          {/* TODO: Product grid goes here */}
          <AllProducts/>
          <PromotionalAds/>
        </div>
      </div>
      <Discount/>
    </div>
  );
};


export default Shop;
