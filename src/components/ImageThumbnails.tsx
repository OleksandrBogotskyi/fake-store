import classNames from 'classnames';

interface ImageThumbnailsProps {
  images: string[];
  selectedImage: string;
  onSelect: (image: string) => void;
}

function ImageThumbnails({ images, selectedImage, onSelect }: ImageThumbnailsProps) {
  return (
    <div className="flex flex-col gap-6 items-center mr-20">
      {images.slice(0, 3).map((img, index) => (
        <img
          key={index}
          className={classNames(
            'w-25 h-25 rounded-md cursor-pointer object-cover border transition',
            {
              'brightness-30': selectedImage === img,
              'hover:brightness-70': selectedImage !== img,
            }
          )}
          src={img}
          alt={`Product Photo ${index + 1}`}
          onClick={() => onSelect(img)}
        />
      ))}
    </div>
  );
}

export default ImageThumbnails;
