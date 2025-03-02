import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

export const productStorage = {
  async getAllProducts(): Promise<Product[]> {
    try {
      const response = await axios.get<Product[]>(API_URL);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  async getProduct(id: number): Promise<Product | null> {
    try {
      const { data: product } = await axios.get(`${API_URL}/${id}`);
      return product;
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  async createProduct(
    newProduct: Omit<Product, "id">
  ): Promise<Product | null> {
    try {
      const response = await axios.post<Product>(API_URL, newProduct);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  async updateProduct(
    id: number,
    updatedData: Partial<Product>
  ): Promise<Product | null> {
    try {
      const response = await axios.put<Product>(`${API_URL}/${id}`, {
        ...updatedData,
        id,
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  async deleteProduct(id: number): Promise<boolean> {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
};
