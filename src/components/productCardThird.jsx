import Image from "next/image";

const ProductCardThird = ({ product }) => {
  const {
    name,
    category,
    price,
    originalPrice,
    discount,
    rating,
    reviewCount,
    images,
    badge,
    inStock,
  } = product;
  return (
    <div className="bg-white gap-2 items-center flex">
      <div className="p-4">
        <Image
          src={images}
          width={70}
          height={70}
          quality={100}
          alt="product"
        />
      </div>
      <div>
        {/* Product Name */}

        <p className="text-gray-700 cursor-pointer duration-400 hover:text-[#1868d5] font-semibold text-sm md:text-base">
          {name.length > 20 ? name.slice(0, 20) + "..." : name}
        </p>

        {/* Price Section */}
        <div className="mt-2 text-base md:text-lg">
          {originalPrice && (
            <span className="line-through text-gray-400 mr-2">
              ${originalPrice}
            </span>
          )}

          <span className="text-red-600 font-semibold">${price}</span>
        </div>
      </div>
    </div>
  );
};
export default ProductCardThird;
