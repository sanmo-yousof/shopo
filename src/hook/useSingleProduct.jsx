// hooks/useSingleProduct.ts
"use client";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { Products, Reviews } from "@/utils/utils";

const useSingleProduct = () => {
  const { id } = useParams();
  const productId = Number(id);

  const data = useMemo(() => {
    return Products.find((product) => product.id === productId);
  }, [productId]);

  const review = useMemo(() => {
    return Reviews.filter((rev) => rev.id === productId);
  }, [productId]);

  return { data, review };
};

export default useSingleProduct;
