import { Category } from "../types/category.types";

interface CategoryFilterOptionProps {
  category: Category;
  isSelected: boolean;
  onClick: (category: Category) => void;
  className?: string;
}

function CategoryFilterOption({
  category,
  isSelected,
  onClick,
  className = "",
}: CategoryFilterOptionProps) {
  const handleClick = () => {
    onClick(category);
  };

  const baseClasses = "px-4 py-2 rounded-lg transition";
  const selectedClasses = isSelected
    ? "bg-blue-500 text-white"
    : "bg-gray-900 text-white border border-gray-700 hover:bg-gray-800";

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${selectedClasses} ${className}`}
    >
      {category.name}
    </button>
  );
}

export default CategoryFilterOption;
