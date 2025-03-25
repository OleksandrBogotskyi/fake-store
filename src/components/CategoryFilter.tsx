import { Category } from '../types/category.types';
import { Nullable } from '../types/utils';
import CategoryFilterOption from './CategoryFilterOption';
import classNames from 'classnames';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: Nullable<Category>;
  onChangeCategory: (category: Nullable<Category>) => void;
}

function CategoryFilter({
  categories,
  selectedCategory,
  onChangeCategory,
}: CategoryFilterProps) {
  const handleResetFilters = () => {
    onChangeCategory(null);
  };

  const handleSelectCategory = (category: Category) => {
    onChangeCategory(category);
  };

  return (
    <div className="flex space-x-4 mb-4">
      <button
        onClick={handleResetFilters}
        className={classNames(
          'px-4 py-2 rounded-lg transition',
          selectedCategory === null
            ? 'bg-blue-500 text-white'
            : 'bg-gray-900 text-white border border-gray-700 hover:bg-gray-800'
        )}
      >
        All
      </button>

      {categories.map((category) => (
        <CategoryFilterOption
          key={category.id}
          category={category}
          isSelected={selectedCategory?.id === category.id}
          onClick={handleSelectCategory}
        />
      ))}
    </div>
  );
}

export default CategoryFilter;
