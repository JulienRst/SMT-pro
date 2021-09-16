import classnames from 'classnames';
import React from 'react';
import formatStyleVariables from 'technical/format/styleVariables';
import useWindowDimensions from 'technical/window/useWindowDimensions';
import BurgerMenu from 'ui/burgerMenu';
import variables from 'ui/variables.module.scss';
import styles from './index.module.scss';

interface HeaderProps {
  isBurgerMenuOpen: boolean;
  setIsBurgerMenuOpen: (isBurgerMenuOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ children, isBurgerMenuOpen, setIsBurgerMenuOpen }) => {
  const { width } = useWindowDimensions();

  return (width < formatStyleVariables(variables.mobileNav)) ? (
    <header className={styles.header}>
      <BurgerMenu isActive={isBurgerMenuOpen} handleClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)} />
      <div className={classnames(styles.mobileMenu, isBurgerMenuOpen && styles.active)}>
        {children}
      </div>
    </header>
  ) : <header className={styles.header}>{children}</header>
}

export default Header;