import { Products } from "@/utils/utils";
import ProductCard from "../productCard";

const RelatedProducts = ({category}) => {
  
  // const filterdData = Products.filter(product => product.category === category);
  
  return(
    <div className="max-w-7xl py-8  md:py-12 mx-auto px-4">
      
        <h2 className="sectionHeading">Related Product</h2>

        <div className="grid grid-cols-1 gap-4 mt-4 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {
              Products?.slice(2,6).map((product,indx) => {
                return(
                  <ProductCard key={indx} product={product}/>
                )
              })
          }

        </div>
      
    
    </div>
  );
};
export default RelatedProducts;