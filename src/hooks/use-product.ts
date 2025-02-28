import { api } from "@/services/api";
import { useEffect, useState } from "react";

export const useProduct = (id: number) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      const { data: product } = await api.get(`/products/${id}`);
      setProduct(product);
    };
    if (id) getProduct();
  }, [id]);

  return {
    product,
  };
};
