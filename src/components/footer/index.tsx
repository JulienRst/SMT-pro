import React from 'react';
import { useTranslation } from 'react-i18next';
import Space from 'ui/space';
import UIFooter from '../../ui/footer';
import styles from './index.module.scss';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <UIFooter>
      <Space className={styles.footer} justify="space-between">
        <Space>
          <span>{t('footer.info.name')}</span>
          <span>{t('footer.info.location')}</span>
          <span>{t('footer.info.siret')}</span>
          <a href={`mailto:${t('footer.info.mail')}`}>{t('footer.info.mail')}</a>
          <a href={`tel:${t('footer.info.phone').split(' ').join('')}`}>{t('footer.info.phone')}</a>
        </Space>
        <Space>
          {t('footer.copy')}
        </Space>
      </Space>
    </UIFooter>
  )
}

export default Footer;