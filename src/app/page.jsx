import HeroSlider from "@/components/homeParts/heroSlider";
import AllBrands from "@/components/homeParts/brands";
import NewArrivals from "@/components/homeParts/newArrivals";
import GamerWorld from "@/components/homeParts/gamerWorld";
import TopSelling from "@/components/homeParts/topSelling";
import PopularSales from "@/components/homeParts/popularSales";
import FlashSale from "@/components/homeParts/flashSale";
import PopularSaleSecond from "@/components/homeParts/popularSaleSecond";
import Features from "@/components/homeParts/features";

const Home = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <HeroSlider />

      <AllBrands />

      <NewArrivals />

      <GamerWorld />

      <TopSelling />

      <PopularSales />

      <FlashSale />

      <PopularSaleSecond />
      
      <Features/>
    </div>
  );
};

export default Home;
