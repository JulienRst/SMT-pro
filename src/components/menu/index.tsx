import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Routes from 'routes';
import Space from 'ui/space';
import Header from '../../ui/header';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import useWindowDimensions from 'technical/window/useWindowDimensions';
import variables from 'ui/variables.module.scss';
import formatStyleVariables from 'technical/format/styleVariables';

const Menu: React.FC = () => {

  const { t } = useTranslation();
  const { width } = useWindowDimensions();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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
    },
    {
      key: '2',
      label: t('menu.works'),
      to: Routes.Works,
    },
    {
      key: '3',
      label: t('menu.contact'),
      to: Routes.Contact,
    }
  ]
  
  const isMobile = width < formatStyleVariables(variables.mobileNav);

  return (
    <Header 
      isBurgerMenuOpen={isMenuOpen}
      setIsBurgerMenuOpen={(newIsMenuOpen: boolean) => setIsMenuOpen(newIsMenuOpen)}
    >
      <Space direction="vertical" className={styles.menuItemsContainer}>
        <Space
          direction={isMobile ? 'vertical' : 'horizontal'}
          align={isMobile ? 'middle' : 'end'}
          justify={isMobile ? 'center': 'start'}
          size="medium"
          className={styles.menuItems}
        >
          {MenuItems.map((item) => (
            <Link
              key={item.key}
              className={styles.menuLink}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </Space>
      </Space>
    </Header>
  )
}

export default Menu;