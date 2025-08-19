import HeroSlider from "@/components/homeParts/heroSlider";
import AllBrands from "@/components/homeParts/brands";
import NewArrivals from "@/components/homeParts/newArrivals";
import GamerWorld from "@/components/homeParts/gamerWorld";
import TopSelling from "@/components/homeParts/topSelling";
import PopularSales from "@/components/homeParts/popularSales";
import FlashSale from "@/components/homeParts/flashSale";
import PopularSaleSecond from "@/components/homeParts/popularSaleSecond";
import Features from "@/components/homeParts/features";
import PromotionalAdsSecond from "@/components/shopParts/promotionalAdsSecond";
import PromotionalAds from "@/components/homeParts/promotionalAds";

const Home = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <HeroSlider />

      <AllBrands />

      <NewArrivals />

      <PromotionalAds/>

      <GamerWorld />

      <TopSelling />

      <div className="mx-auto flex gap-4 md:gap-6 lg:gap-8 flex-col sm:flex-row max-w-7xl px-4">
        <div className="w-full sm:w-1/2">
          <PromotionalAdsSecond/>
        </div>
        <div className="w-full sm:w-1/2">
          <PromotionalAdsSecond/>
        </div>

      </div>

      <PopularSales />

      <FlashSale />

      <PopularSaleSecond />
      
      <Features/>
    </div>
  );
};

export default Home;
