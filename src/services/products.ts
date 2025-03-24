import { axiosInstance } from "../core/api";
import { APIEndpoints } from "../enums/api-url.enum";

export class ProductsService {
  static async fetchProducts() {
    try {
      const response = await axiosInstance.get(APIEndpoints.PRODUCTS);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }

  static async fetchCategories() {
    try {
      const response = await axiosInstance.get(APIEndpoints.CATEGORIES);
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  }

  static async fetchProductsByCategory(categoryId: number) {
    try {
      const response = await axiosInstance.get(
        `${APIEndpoints.CATEGORIES}/${categoryId}/products`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching products by category:", error);
      throw error;
    }
  }
}

