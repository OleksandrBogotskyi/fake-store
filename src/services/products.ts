import { axiosInstance } from "../core/api";
import { APIEndpoints } from "../enums/api-url.enum";
import { GetProductsDto } from "../types/get-products.dto";

export class ProductsService {
  static async fetchProducts(filters: GetProductsDto = {}) {
    try {
      const response = await axiosInstance.get(APIEndpoints.PRODUCTS, { params: filters });
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
}
