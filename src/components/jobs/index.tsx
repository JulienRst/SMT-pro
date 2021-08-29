import React from 'react';
import { useTranslation } from 'react-i18next';
import Routes from 'routes';
import images from 'ui/images';
import LandingBlock from 'ui/landingBlock';
import Space from 'ui/space';
import Title from 'ui/title';
import styles from './index.module.scss';

const Jobs: React.FC = () => {
  const { t } = useTranslation();

  return <LandingBlock slug={Routes.Jobs}>
    <Space direction="vertical" size="large" align="middle">
      <Title>{t('jobs.title')}</Title>
      <img className={styles.jobs} src={images.Jobs} alt={t('jobs.alt')} />
    </Space>
  </LandingBlock>
}

export default Jobs;