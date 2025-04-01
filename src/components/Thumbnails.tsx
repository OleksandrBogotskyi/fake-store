import classNames from 'classnames';

interface ThumbnailProps {
  img: string;
  isSelected: boolean;
  onSelect: () => void;
}

function Thumbnail({ img, isSelected, onSelect }: ThumbnailProps) {
  return (
    <img
      className={classNames(
        'w-25 h-25 rounded-md cursor-pointer object-cover border transition',
        {
          'brightness-30': isSelected,
          'hover:brightness-70': !isSelected,
        }
      )}
      src={img}
      alt="Product Thumbnail"
      onClick={onSelect}
    />
  );
}

export default Thumbnail;
