"use client";

import { useEffect, useState } from "react";

export default function useAllProducts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const res = await fetch("/allproduct.json"); 
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return [data, loading ];
}
