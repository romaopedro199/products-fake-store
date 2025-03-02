import { useProductStore } from "@/stores/products-store";
import { useEffect, useState } from "react";

export const useProduct = (id: number) => {
  const { fetchProduct } = useProductStore();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      const product = await fetchProduct(id);

      if (product) setProduct(product);
    };
    if (id) getProduct();
  }, [id]);

  return {
    product,
  };
};
