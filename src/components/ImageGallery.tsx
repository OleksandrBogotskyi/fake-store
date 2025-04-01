import { useState } from 'react';
import Thumbnail from './Thumbnails';

interface ImageGalleryProps {
  images: string[];
}

function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleSelectImage = (img: string) => () => {
    setSelectedImage(img);
  };
  

  return (
    <div className="flex items-center">
      <div className="flex flex-col gap-6 items-center mr-20">
        {images.slice(0, 3).map((img, index) => (
          <Thumbnail
            key={index}
            img={img}
            isSelected={selectedImage === img}
            onSelect={handleSelectImage(img)}
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
