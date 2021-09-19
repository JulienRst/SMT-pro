import Map from 'components/map';
import config from 'config';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Routes from 'routes';
import images from 'ui/images';
import LandingBlock from 'ui/landingBlock';
import Space from 'ui/space';
import Title from 'ui/title';
import styles from './index.module.scss';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <LandingBlock full slug={Routes.Contact}>
      <Space className={styles.contactContainer} direction="vertical" size="large" align="middle">
        <Title>{t('contact.title')}</Title>
        <Space className={styles.contactBlockContainer}>
          <a href={`tel:${config.phone}`}>
            <Space className={styles.contactBlock} direction="vertical" size="medium" align="middle">
              <img src={images.Contact.Phone} alt={t('contact.phone', { phone: config.dspPhone })} />
              <p>{t('contact.phone', { phone: config.dspPhone })}</p>
            </Space>
          </a>
          <Space className={styles.contactBlock} direction="vertical" size="medium" align="middle">
            <img src={images.Contact.Factory} alt={t('contact.factory')} />
            <p>{t('contact.factory')}</p>
          </Space>
          <a href={`mailto:${config.email}`}>
            <Space className={styles.contactBlock} direction="vertical" size="medium" align="middle">
              <img src={images.Contact.Email} alt={config.email} />
              <br />
                <p>{config.email}</p>
            </Space>
          </a>
        </Space>
        <Map />
      </Space>
    </LandingBlock>
  );
}

export default Contact;