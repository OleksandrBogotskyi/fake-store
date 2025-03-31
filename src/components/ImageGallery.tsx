import { useState } from 'react';
import classNames from 'classnames';

interface ImageGalleryProps {
  images: string[];
}

function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex items-center">
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
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
      <img
        className="w-120 h-120 rounded-lg object-cover mr-40"
        src={selectedImage}
        alt="Selected Product"
      />
    </div>
  );
}

export default ImageGallery;
