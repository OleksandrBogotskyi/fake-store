import { Category } from "../../types/category.types";

export interface CategoriesState {
  categories: Category[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
