import React from 'react';
import styles from './index.module.scss';
import classnames from 'classnames';
import ImgWithFallBack from 'ui/imgWithFallBack';

interface GalleryTileProps {
  name: string;
  img: {
    main: string;
    fallback: string;
  };
  onClick?: () => void;
  className?: string;
}

const GalleryTile: React.FC<GalleryTileProps> = ({ name, img, onClick, className }) => {
  return (
    <div className={classnames(styles.tileContainer, className)} onClick={onClick}>
      <p>{name}</p>
      <ImgWithFallBack src={img} alt={name} />
    </div>
  )
}

export default GalleryTile;