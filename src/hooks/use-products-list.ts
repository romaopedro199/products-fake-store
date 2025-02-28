import { useProductStore } from "@/stores/products-store";
import { isFeaturedProduct } from "@/utils/is-featured-product";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

export const useProductsList = () => {
  const {
    products,
    loading,
    category,
    sort,
    fetchProducts,
    page,
    totalProducts,
    setPage,
    featuredFirst,
  } = useProductStore();
  const router = useRouter();

  const tableTitles = ["ID", "Name", "Category", "Price", "Rating", "Actions"];

  const featuredProducts = useMemo(
    () =>
      !featuredFirst
        ? []
        : products.filter((product) => isFeaturedProduct(product)),
    [products, category, sort, page, featuredFirst]
  );

  const normalProducts = useMemo(
    () =>
      !featuredFirst
        ? products
        : products.filter((product) => !isFeaturedProduct(product)),
    [products, category, sort, page, featuredFirst]
  );

  const handlePageChange = (_: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const handleGoToProduct = (id: number) => {
    router.push(`/products/${id}`);
  };

  useEffect(() => {
    fetchProducts();
  }, [category, sort, page, featuredFirst]);

  return {
    loading,
    tableTitles,
    handlePageChange,
    normalProducts,
    featuredProducts,
    products,
    category,
    sort,
    fetchProducts,
    page,
    totalProducts,
    setPage,
    featuredFirst,
    handleGoToProduct,
  };
};
