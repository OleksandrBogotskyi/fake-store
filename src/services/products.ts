import { axiosInstance } from "../core/api";
import { APIEndpoints } from "../enums/api-url.enum";

export class ProductsService {
  static async fetchProducts(filters: { title?: string; categoryId?: number } = {}) {
    try {
      const response = await axiosInstance.get(APIEndpoints.PRODUCTS, { params: filters });
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
}
