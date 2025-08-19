import { Products } from "@/utils/utils";
import ProductCard from "../productCard";

const AllProducts = () => {
  return (
    <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 gap-8 lg:grid-cols-3">
            {
              Products.map((product,indx) => <ProductCard product={product} key={indx}/>)
            }
    </div>
  )
}
export default AllProducts;