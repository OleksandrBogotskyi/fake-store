import classNames from 'classnames';

interface ThumbnailProps {
  img: string;
  isSelected: boolean;
  onSelect: (img: string) => void;
}

function Thumbnail({ img, isSelected, onSelect }: ThumbnailProps) {
  const handleClick = () => {
    onSelect(img);
  };

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
      onClick={handleClick}
    />
  );
}

export default Thumbnail;
