import React from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import styles from './index.module.scss';
import 'react-image-gallery/styles/scss/image-gallery.scss';

interface CarouselProps {
  isVisible: boolean;
  handleClose: () => void;
  galleryData?: ReactImageGalleryItem[];
}

const Gallery: React.FC<CarouselProps> = ({ isVisible, handleClose, galleryData }) => {

  if (!isVisible || !galleryData) {
    return null;
  }

  return <div className={styles.galleryContainer}>
    <div className={styles.close} onClick={() => handleClose()} />
    <ImageGallery items={galleryData} />
  </div>
}

export default Gallery;