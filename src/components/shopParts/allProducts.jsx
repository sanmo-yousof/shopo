"use client"

import ProductCard from "../productCard";
import useAllProducts from "@/hook/useAllProduct";
import ProductCard1Skeletion from "../productCard1skeleton";

const AllProducts = () => {
  const [data,loading] = useAllProducts()

  
  return (
    <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 gap-8 lg:grid-cols-3">
            {loading
            ? Array(6)
                .fill(0)
                .map((_, i) => <ProductCard1Skeletion key={i} />)
            : data
                ?.map((product,indx) => <ProductCard product={product} key={indx}/>
                )}
    </div>
  )
}
export default AllProducts;