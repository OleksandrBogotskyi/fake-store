import { axiosInstance } from "../core/api";
import { APIEndpoints } from "../enums/api-url.enum";

export class CategoriesService {
  static async fetchCategories() {
    try {
      const response = await axiosInstance.get(APIEndpoints.CATEGORIES);
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  }
}
