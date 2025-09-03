"use client";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { Products, Reviews } from "@/utils/utils";
import useAllProducts from "./useAllProduct";

const useSingleProduct = () => {
  const { id } = useParams();
  const productId = Number(id);
  const [data, loading] = useAllProducts();

  const singleData = useMemo(() => {
    if (!data?.length) return null;
    return data.find((product) => product.id === productId) || null;
  }, [productId, data]);

  const review = useMemo(() => {
    return Reviews.filter((rev) => rev.id === productId);
  }, [productId]);

  return { singleData, review, loading };
};

export default useSingleProduct;
