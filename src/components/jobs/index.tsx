import React from 'react';
import { useTranslation } from 'react-i18next';
import Routes from 'routes';
import useWindowDimensions from 'technical/window/useWindowDimensions';
import images from 'ui/images';
import ImgWithFallBack from 'ui/imgWithFallBack';
import LandingBlock from 'ui/landingBlock';
import Space from 'ui/space';
import Title from 'ui/title';
import styles from './index.module.scss';

const JOB_VERTICAL_WIDTH = 500;

const Jobs: React.FC = () => {
  const { t } = useTranslation();

  const { width } = useWindowDimensions();

  const isVertical = width < JOB_VERTICAL_WIDTH;

  return <LandingBlock slug={Routes.Jobs}>
    <Space direction="vertical" size="large" align="middle">
      <Title>{t('jobs.title')}</Title>
      <ImgWithFallBack className={styles.jobs} src={isVertical ? images.Jobs.vertical : images.Jobs.hortizontal} alt={t('jobs.alt')} />
    </Space>
  </LandingBlock>
}

export default Jobs;