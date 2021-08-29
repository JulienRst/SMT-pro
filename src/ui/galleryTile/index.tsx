import React from 'react';
import styles from './index.module.scss';
import classnames from 'classnames';

interface GalleryTileProps {
  name: string;
  img: string;
  onClick?: () => void;
  className?: string;
}

const GalleryTile: React.FC<GalleryTileProps> = ({ name, img, onClick, className }) => {
  return (
    <div className={classnames(styles.tileContainer, className)} onClick={onClick}>
      <p>{name}</p>
      <img src={img} alt={name} />
    </div>
  )
}

export default GalleryTile;