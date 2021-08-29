import React from 'react';
import { useTranslation } from 'react-i18next';
import Routes from 'routes';
import Space from 'ui/space';
import Header from '../../ui/header';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {

  const { t } = useTranslation();

  const MenuItems = [
    {
      key: '0',
      label: t('menu.smt'),
      to: Routes.Smt,
    },
    {
      key: '1',
      label: t('menu.jobs'),
      to: Routes.Jobs,
    }
  ]
  

  return (
    <Header>
      <Space direction="vertical">
        <Space align="end" size="medium" className={styles.menuItems}>
          {MenuItems.map((item) => (
            <Link key={item.key} className={styles.menuLink} to={item.to}>{item.label}</Link>
          ))}
        </Space>
      </Space>
    </Header>
  )
}

export default Menu;