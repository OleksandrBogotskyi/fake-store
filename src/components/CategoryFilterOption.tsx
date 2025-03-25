import classNames from "classnames";
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

  return (
    <button
      onClick={handleClick}
      className={classNames(
        "px-4 py-2 rounded-lg transition text-white",
        {
          "bg-blue-500": isSelected,
          "bg-gray-900 border border-gray-700 hover:bg-gray-800": !isSelected,
        },
        className
      )}
    >
      {category.name}
    </button>
  );
}

export default CategoryFilterOption;
