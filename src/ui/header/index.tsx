import React from 'react';
import styles from './index.module.scss';

const Header: React.FC = ({ children }) => {
  return <header className={styles.header}>{children}</header>
}

export default Header;