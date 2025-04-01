import classNames from 'classnames';

interface ThumbnailProps {
  img: string;
  isSelected: boolean;
  onClick: () => void;
}

function Thumbnail({ img, isSelected, onClick }: ThumbnailProps) {
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
      onClick={onClick}
    />
  );
}

export default Thumbnail;
