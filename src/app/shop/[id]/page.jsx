
import RelatedProducts from "@/components/productSinglePageParts/realtedProducts";
import Discount from "@/components/shopParts/discount";
import DescriptionTabs from "@/components/productSinglePageParts/descriptionTab";
import useSingleProduct from "@/hook/useSingleProduct";
import ProductInfo from "@/components/productSinglePageParts/productInfo";

const SinglePage = () => {



  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <ProductInfo />
      </div>

      <DescriptionTabs />

      {/* related product section  */}
       
      <RelatedProducts/>
        
        {/* ads */}
      <Discount/>
    </div>
  );
};
export default SinglePage;
