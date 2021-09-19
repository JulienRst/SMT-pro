import config from 'config';
import React from 'react';
import { useTranslation } from 'react-i18next';
import useWindowDimensions from 'technical/window/useWindowDimensions';
import Space from 'ui/space';
import UIFooter from '../../ui/footer';
import styles from './index.module.scss';

const MOBILE_FOOTER = 1080;

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const { width } = useWindowDimensions();

  const isMobile = width < MOBILE_FOOTER;

  return (
    <UIFooter>
      <Space className={styles.footer} justify="space-between">
        <Space>
          {!isMobile && (
            <>
              <span>{t('footer.info.name')}</span>
              <span>{config.address}</span>
              <span>{t('footer.info.siret')}</span>
            </>
          )}
          <a href={`mailto:${config.email}`}>{config.email}</a>
          <a href={`tel:${config.phone}`}>{config.dspPhone}</a>
        </Space>
        {!isMobile && (
          <Space>
            {t('footer.copy')}
          </Space>
        )}
      </Space>
    </UIFooter>
  )
}

export default Footer;