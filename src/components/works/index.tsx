import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Routes from 'routes';
import GalleryTile from 'ui/galleryTile';
import images from 'ui/images';
import LandingBlock from 'ui/landingBlock';
import Space from 'ui/space';
import Title from 'ui/title';
import Carousel from 'components/carousel';
import styles from './index.module.scss';
import { ReactImageGalleryItem } from 'react-image-gallery';

interface GalleryItem {
  key: number;
  name: string;
  img: string;
  images: ReactImageGalleryItem[];
}

const arrayOfImagesToGalleryImages = (images: string[]): ReactImageGalleryItem[] => {
  return images.map((image) => ({ original: image, thumbnail: image, originalHeight: window.innerHeight - 200 }));
}

const Works: React.FC = () => {
  const { t } = useTranslation();
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);
  const [currentGalleryItem, setCurrentGalleryItem] = useState<GalleryItem>();

  const handleClick = (item: GalleryItem) => {
    setCurrentGalleryItem(item);
    setIsCarouselVisible(true);
  }

  const galleryData: GalleryItem[] = [
    {
      key: 0,
      name: t('works.gallery.verandas'),
      img: images.Gallery.Category.Verandas,
      images: arrayOfImagesToGalleryImages(Object.values(images.Gallery.Carousel.VP)),
    },
    {
      key: 1,
      name: t('works.gallery.fencing'),
      img: images.Gallery.Category.Clotures,
      images: arrayOfImagesToGalleryImages(Object.values(images.Gallery.Carousel.Fences))
    },
    {
      key: 2,
      name: t('works.gallery.stairs'),
      img: images.Gallery.Category.Escaliers,
      images: arrayOfImagesToGalleryImages(Object.values(images.Gallery.Carousel.Stairs))
    },
    {
      key: 3,
      name: t('works.gallery.guardrail'),
      img: images.Gallery.Category.GardeCorps,
      images: arrayOfImagesToGalleryImages(Object.values(images.Gallery.Carousel.GC))
    },
    {
      key: 4,
      name: t('works.gallery.entrance'),
      img: images.Gallery.Category.HallsDentree,
      images: arrayOfImagesToGalleryImages(Object.values(images.Gallery.Carousel.Entrance))
    },
    {
      key: 5,
      name: t('works.gallery.gate'),
      img: images.Gallery.Category.Portails,
      images: arrayOfImagesToGalleryImages(Object.values(images.Gallery.Carousel.Portals))
    },
    {
      key: 6,
      name: t('works.gallery.major-works'),
      img: images.Gallery.Category.GrandsOuvrages,
      images: arrayOfImagesToGalleryImages(Object.values(images.Gallery.Carousel.GO))
    },
    {
      key: 7,
      name: t('works.gallery.canopy'),
      img: images.Gallery.Category.Verrieres,
      images: arrayOfImagesToGalleryImages(Object.values(images.Gallery.Carousel.Verr))
    },
    {
      key: 8,
      name: t('works.gallery.furnitures'),
      img: images.Gallery.Category.Mobiliers,
      images: arrayOfImagesToGalleryImages(Object.values(images.Gallery.Carousel.Furnitures))
    },
  ];

  return <LandingBlock slug={Routes.Works}>
    <Space align="middle" direction="vertical" size="large" className={styles.pageContainer}>
      <Title>{t('works.title')}</Title>
      <Space className={styles.galleryContainer}>
        {galleryData.map((galleryItem) => (
          <GalleryTile onClick={() => handleClick(galleryItem)} className={styles.galleryTile} key={galleryItem.key} name={galleryItem.name} img={galleryItem.img} />
        ))}
      </Space>
    </Space>
    <Carousel
      handleClose={() => setIsCarouselVisible(false)}
      isVisible={isCarouselVisible}
      galleryData={currentGalleryItem?.images}
    />
  </LandingBlock>
}

export default Works;