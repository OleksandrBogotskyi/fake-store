import { Category } from "../types/product.type";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: Category | null;
  onChangeCategory: (category: Category | null) => void;
}

function CategoryFilter({ categories, selectedCategory, onChangeCategory }: CategoryFilterProps) {
  return (
    <div className="flex space-x-4 mb-4">
      <button
        onClick={() => onChangeCategory(null)}
        className={`px-4 py-2 rounded-lg transition ${
          selectedCategory === null ? "bg-blue-500 text-white" : "bg-gray-900 text-white border border-gray-700 hover:bg-gray-800"
        }`}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onChangeCategory(category)}
          className={`px-4 py-2 rounded-lg transition ${
            selectedCategory?.id === category.id
              ? "bg-blue-500 text-white"
              : "bg-gray-900 text-white border border-gray-700 hover:bg-gray-800"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
