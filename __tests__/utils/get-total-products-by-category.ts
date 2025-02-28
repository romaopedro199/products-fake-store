import { getTotalProductsByCategory } from "@/utils/get-total-products-by-category";

describe("getTotalProductsByCategory", () => {
  const mockProducts = [
    { id: 1, title: "Product 1", category: "Category 1" },
    { id: 2, title: "Product 2", category: "Category 2" },
    { id: 3, title: "Product 3", category: "Category 1" },
    { id: 4, title: "Product 4", category: "Category 3" },
  ] as Product[];

  it("should return 0 if no products match the category", () => {
    const result = getTotalProductsByCategory({
      category: "Category 4",
      products: mockProducts,
    });

    expect(result).toBe(0);
  });

  it("should return the total number of products in the given category", () => {
    const result = getTotalProductsByCategory({
      category: "Category 1",
      products: mockProducts,
    });

    expect(result).toBe(2);
  });

  it("should return the total number of products if no category is provided", () => {
    const result = getTotalProductsByCategory({
      category: "",
      products: mockProducts,
    });

    expect(result).toBe(4);
  });

  it("should return 0 if products array is empty", () => {
    const result = getTotalProductsByCategory({
      category: "Category 1",
      products: [],
    });

    expect(result).toBe(0);
  });
});
