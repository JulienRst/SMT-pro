import React from 'react';
import { useTranslation } from 'react-i18next';
import Routes from 'routes';
import GalleryTile from 'ui/galleryTile';
import images from 'ui/images';
import LandingBlock from 'ui/landingBlock';
import Space from 'ui/space';
import Title from 'ui/title';
import styles from './index.module.scss';

interface GalleryItem {
  key: number;
  name: string;
  img: string;
}

const Works: React.FC = () => {
  const { t } = useTranslation();

  const galleryData: GalleryItem[] = [
    { key: 0, name: t('works.gallery.verandas'), img: images.Gallery.Category.Verandas },
    { key: 1, name: t('works.gallery.fencing'), img: images.Gallery.Category.Clotures },
    { key: 2, name: t('works.gallery.stairs'), img: images.Gallery.Category.Escaliers },
    { key: 3, name: t('works.gallery.guardrail'), img: images.Gallery.Category.GardeCorps },
    { key: 4, name: t('works.gallery.entrance'), img: images.Gallery.Category.HallsDentree },
    { key: 5, name: t('works.gallery.gate'), img: images.Gallery.Category.Portails },
    { key: 6, name: t('works.gallery.major-works'), img: images.Gallery.Category.GrandsOuvrages },
    { key: 7, name: t('works.gallery.canopy'), img: images.Gallery.Category.Verrieres },
    { key: 8, name: t('works.gallery.furnitures'), img: images.Gallery.Category.Mobiliers },
  ];

  return <LandingBlock slug={Routes.Works}>
    <Space align="middle" direction="vertical" size="large" className={styles.pageContainer}>
      <Title>{t('works.title')}</Title>
      <Space className={styles.galleryContainer}>
        {galleryData.map((galleryItem) => (
          <GalleryTile onClick={() => window.alert('Bravo tu as cliqué sur une categorie de gallerie alors que je t\'ai dis que j\'allais pas la faire au début, mais bon, je vois qu\'on écoute rien...')} className={styles.galleryTile} key={galleryItem.key} name={galleryItem.name} img={galleryItem.img} />
        ))}
      </Space>
    </Space>
  </LandingBlock>
}

export default Works;