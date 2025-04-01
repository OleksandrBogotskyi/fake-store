import { useState } from 'react';
import ImageThumbnails from './ImageThumbnails';

interface ImageGalleryProps {
  images: string[];
}

function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex items-center">
      <ImageThumbnails images={images} selectedImage={selectedImage} onSelect={setSelectedImage} />
      <img
        className="w-120 h-120 rounded-lg object-cover mr-40"
        src={selectedImage}
        alt="Selected Product"
      />
    </div>
  );
}

export default ImageGallery;
