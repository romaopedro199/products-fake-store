import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { productStorage } from "@/services/product-storage";

describe("productStorage", () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it("should fetch all products successfully", async () => {
    const mockProducts = [
      {
        id: 1,
        title: "Product 1",
        category: "Category 1",
        price: 20,
        rating: { rate: 4.5 },
      },
      {
        id: 2,
        title: "Product 2",
        category: "Category 2",
        price: 30,
        rating: { rate: 4.0 },
      },
    ];
    mock.onGet("https://fakestoreapi.com/products").reply(200, mockProducts);

    const products = await productStorage.getAllProducts();

    expect(products).toEqual(mockProducts);
  });

  it("should return an empty array if there is an error fetching products", async () => {
    mock.onGet("https://fakestoreapi.com/products").reply(500);

    const products = await productStorage.getAllProducts();

    expect(products).toEqual([]);
  });

  it("should create a new product successfully", async () => {
    const newProduct = {
      title: "New Product",
      category: "Category 3",
      price: 50,
      rating: { rate: 4.5 },
    };
    const createdProduct = { ...newProduct, id: 3 };
    mock.onPost("https://fakestoreapi.com/products").reply(200, createdProduct);

    const result = await productStorage.createProduct(newProduct as Product);

    expect(result).toEqual(createdProduct);
  });

  it("should return null if there is an error creating a product", async () => {
    const newProduct = {
      title: "New Product",
      category: "Category 3",
      price: 50,
      rating: { rate: 4.5 },
    };
    mock.onPost("https://fakestoreapi.com/products").reply(500);

    const result = await productStorage.createProduct(newProduct as Product);

    expect(result).toBeNull();
  });

  it("should update a product successfully", async () => {
    const updatedData = { title: "Updated Product" };
    const updatedProduct = {
      id: 1,
      ...updatedData,
      category: "Category 1",
      price: 20,
      rating: { rate: 4.5 },
    };
    mock
      .onPut("https://fakestoreapi.com/products/1")
      .reply(200, updatedProduct);

    const result = await productStorage.updateProduct(1, updatedData);

    expect(result).toEqual(updatedProduct);
  });

  it("should return null if there is an error updating a product", async () => {
    const updatedData = { title: "Updated Product" };
    mock.onPut("https://fakestoreapi.com/products/1").reply(500);

    const result = await productStorage.updateProduct(1, updatedData);

    expect(result).toBeNull();
  });

  it("should delete a product successfully", async () => {
    mock.onDelete("https://fakestoreapi.com/products/1").reply(200);

    const result = await productStorage.deleteProduct(1);

    expect(result).toBe(true);
  });

  it("should return false if there is an error deleting a product", async () => {
    mock.onDelete("https://fakestoreapi.com/products/1").reply(500);

    const result = await productStorage.deleteProduct(1);

    expect(result).toBe(false);
  });
});
