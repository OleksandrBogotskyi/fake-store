import { Category } from "../../types/category.types";
import { NullableString } from "../../types/utils";

export interface CategoriesState {
  categories: Category[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: NullableString;
}
