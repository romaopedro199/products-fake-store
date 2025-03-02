import { create } from "zustand";
import { formatProductsList } from "@/utils/format-products-list";
import { INITIAL_PAGE } from "@/constants/products";
import { getTotalProductsByCategory } from "@/utils/get-total-products-by-category";
import { productStorage } from "@/services/product-storage";

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  loading: false,
  customError: null,
  category: "",
  categories: [],
  featuredFirst: true,
  sort: "",
  page: 1,
  totalProducts: 0,
  fetchProducts: async () => {
    set({ loading: true });
    try {
      const data = await productStorage.getAllProducts();

      set(({ category, sort, page, featuredFirst }) => {
        const totalProducts = getTotalProductsByCategory({
          products: data,
          category,
        });

        const sortedProducts = !featuredFirst
          ? data
          : data.sort(
              (a: Product, b: Product) => b.rating.rate - a.rating.rate
            );

        const products = formatProductsList({
          products: sortedProducts,
          category,
          sort,
          page,
        });

        return {
          categories: [
            ...new Set(data.map((p: Product) => p.category)),
          ] as Category[],
          products,
          totalProducts,
        };
      });
    } catch (error) {
      if (error) set({ customError: "Something went wrong" });
    } finally {
      set({ loading: false });
    }
  },
  setPage: (page) => set({ page }),
  setCategory: (category) => set({ category, page: INITIAL_PAGE }),
  setSort: (sort) => set({ sort, page: INITIAL_PAGE }),
  setFeaturedFirst: (featuredFirst) =>
    set({ featuredFirst, page: INITIAL_PAGE }),
  fetchProduct: async (id: number) => {
    set({ loading: true });
    try {
      const data = await productStorage.getProduct(id);
      return data;
    } catch (error) {
      if (error) set({ customError: "Something went wrong" });
    } finally {
      set({ loading: false });
    }
  },
  addProduct: async (newProduct) => {
    set({ loading: true });
    try {
      const createdProduct = await productStorage.createProduct(newProduct);
      if (createdProduct) {
        set((state) => ({
          products: [...state.products, createdProduct],
        }));
      }
    } catch (error) {
      if (error) set({ customError: "Something went wrong" });
    } finally {
      set({ loading: false });
    }
  },
  updateProduct: async (id, updatedData) => {
    set({ loading: true });
    try {
      const updatedProduct = await productStorage.updateProduct(
        id,
        updatedData
      );
      if (updatedProduct) {
        set((state) => ({
          products: state.products.map((product) =>
            product.id === id ? updatedProduct : product
          ),
        }));
      }
    } catch (error) {
      if (error) set({ customError: "Something went wrong" });
    } finally {
      set({ loading: false });
    }
  },
  deleteProduct: async (id) => {
    set({ loading: true });
    try {
      const success = await productStorage.deleteProduct(id);
      if (success) {
        set((state) => ({
          products: state.products.filter((product) => product.id !== id),
          filteredProducts: state.products.filter(
            (product) => product.id !== id
          ),
        }));
      }
    } catch (error) {
      if (error) set({ customError: "Something went wrong" });
    } finally {
      set({ loading: false });
    }
  },
}));
