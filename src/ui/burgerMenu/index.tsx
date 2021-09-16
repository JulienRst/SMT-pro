import classnames from 'classnames';
import React from 'react';
import Space from 'ui/space';
import styles from './index.module.scss';

interface BurgerMenuProps {
  isActive: boolean;
  handleClick: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isActive, handleClick}) => {
  return (
    <Space justify="end">
      <button className={classnames(styles.burgerMenuContainer, isActive && styles.active)} onClick={() => handleClick()}>
        <span className={styles.burgerMenuItem} />
        <span className={styles.burgerMenuItem} />
        <span className={styles.burgerMenuItem} />
      </button>
    </Space>
  );
}

export default BurgerMenu;