import React from 'react';
import styles from './index.module.scss';

interface GalleryTileProps {
  name: string;
  img: string;
  onClick?: () => void;
}

const GalleryTile: React.FC<GalleryTileProps> = ({ name, img, onClick }) => {
  return (
    <div className={styles.tileContainer} onClick={onClick}>
      <p>{name}</p>
      <img src={img} alt={name} />
    </div>
  )
}

export default GalleryTile;