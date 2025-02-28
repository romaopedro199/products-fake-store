import { formatProductsList } from "@/utils/format-products-list";

describe("formatProductsList", () => {
  const mockProducts = [
    { id: 1, title: "Product 1", category: "Category 1", price: 20 },
    { id: 2, title: "Product 2", category: "Category 2", price: 30 },
    { id: 3, title: "Product 3", category: "Category 1", price: 40 },
    { id: 4, title: "Product 4", category: "Category 2", price: 10 },
    { id: 5, title: "Product 5", category: "Category 1", price: 50 },
    { id: 6, title: "Product 6", category: "Category 2", price: 60 },
  ] as Product[];

  it("should filter products by category", () => {
    const result = formatProductsList({
      category: "Category 1",
      products: mockProducts,
      sort: "",
      page: 1,
    });

    expect(result.length).toBe(3);
    expect(result[0].category).toBe("Category 1");
  });

  it("should sort products by price in ascending order", () => {
    const result = formatProductsList({
      category: "Category 1",
      products: mockProducts,
      sort: "asc",
      page: 1,
    });

    expect(result[0].price).toBe(20);
    expect(result[result.length - 1].price).toBe(50);
  });

  it("should sort products by price in descending order", () => {
    const result = formatProductsList({
      category: "Category 1",
      products: mockProducts,
      sort: "desc",
      page: 1,
    });

    expect(result[0].price).toBe(50);
    expect(result[result.length - 1].price).toBe(20);
  });

  it("should paginate products correctly", () => {
    const result = formatProductsList({
      category: "Category 1",
      products: mockProducts,
      sort: "",
      page: 1,
    });

    expect(result.length).toBe(3);
    expect(result[0].id).toBe(1);
  });

  it("should handle empty product list", () => {
    const result = formatProductsList({
      category: "Category 3",
      products: [],
      sort: "",
      page: 1,
    });

    expect(result).toEqual([]);
  });
});
