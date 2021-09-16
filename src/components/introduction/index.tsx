import React from 'react';
import { useTranslation } from 'react-i18next';
import Routes from 'routes';
import useWindowDimensions from 'technical/window/useWindowDimensions';
import images from 'ui/images';
import LandingBlock from 'ui/landingBlock';
import Space from 'ui/space';
import Title from 'ui/title';

const MOBILE_WIDTH = 1080;

const Introduction: React.FC = () => {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();

  const isMobile = width < MOBILE_WIDTH;

  return <LandingBlock slug={Routes.Smt}>
    <Space direction="vertical" align="middle" size="large">
      <Title>{t('smt.title')}</Title>
      <Space direction="vertical" size={isMobile ? 'large': 'small'}>
        <Space direction={isMobile ? 'reverse-vertical' : 'horizontal'} align={isMobile ? 'middle' : undefined} size="large">
          <Space direction="vertical">
            <p>{t('smt.block1')}</p>
            <p>{t('smt.block2')}</p>
            <p>{t('smt.block3')}</p>
          </Space>
          <img src={images.SoudeurSmall} alt={t('smt.soudeurAlt')} />
        </Space>
        <Space direction={isMobile ? 'vertical' : 'horizontal'} align={isMobile ? 'middle' : undefined} size="large">
          <img src={images.Atelier} alt={t('smt.atelierAlt')} />
          <Space direction="vertical">
            <p>{t('smt.block4')}</p>
            <p>{t('smt.block5')}</p>
            <p>{t('smt.block6')}</p>
          </Space>
        </Space>
      </Space>
    </Space>
  </LandingBlock>;
}

export default Introduction;