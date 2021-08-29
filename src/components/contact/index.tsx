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

  const contactData = [
    {
      key: 0,
      img: images.Contact.Phone,
      content: t('contact.phone'),
    },
    {
      key: 1,
      img: images.Contact.Factory,
      content: t('contact.factory'),
    },
    {
      key: 2,
      img: images.Contact.Email,
      content: t('contact.mail'),
    }
  ];

  return <LandingBlock slug={Routes.Contact}>
    <Space className={styles.contactContainer} direction="vertical" size="large" align="middle">
      <Title>{t('contact.title')}</Title>
      <Space className={styles.contactBlockContainer}>
        {contactData.map((data) => (
          <Space className={styles.contactBlock} direction="vertical" size="medium" align="middle" key={data.key}>
            <img src={data.img} alt={data.content} />
            <p>{data.content}</p>
          </Space>
        ))}
      </Space>
    </Space>
  </LandingBlock>;
}

export default Contact;