import React from 'react';
import { useTranslation } from 'react-i18next';
import Routes from 'routes';
import GalleryTile from 'ui/galleryTile';
import LandingBlock from 'ui/landingBlock';
import Space from 'ui/space';
import Title from 'ui/title';

const Works: React.FC = () => {
  const { t } = useTranslation();

  const galleryData: { name: string; img: string }[] = [];

  return <LandingBlock slug={Routes.Works}>
    <Space align="middle" direction="vertical" size="large">
      <Title>{t('works.title')}</Title>
      <Space>
        {galleryData.map((galleryItem) => (
          <GalleryTile {...galleryItem} />
        ))}
      </Space>
    </Space>
  </LandingBlock>
}

export default Works;