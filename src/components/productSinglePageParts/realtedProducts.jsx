"use client";
import ProductCard from "../productCard";
import useAllProducts from "@/hook/useAllProduct";
import ProductCard1Skeletion from "../productCard1skeleton";

const RelatedProducts = ({ category }) => {
  // const filterdData = Products.filter(product => product.category === category);

  const [data, loading] = useAllProducts([]);

  return (
    <div className="max-w-7xl py-8  md:py-12 mx-auto px-4">
      <h2 className="sectionHeading">Related Product</h2>

      <div className="grid grid-cols-1 gap-4 mt-4 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {loading
          ? Array(4)
              .fill(0)
              .map((_, i) => <ProductCard1Skeletion key={i} />)
          : data?.slice(2, 6).map((product, indx) => {
              return <ProductCard key={indx} product={product} />;
            })}
      </div>
    </div>
  );
};
export default RelatedProducts;
