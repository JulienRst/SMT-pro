import React from 'react';
import styles from './index.module.scss';

const Footer: React.FC = ({ children }) => {
  return (
    <footer className={styles.footer}>{children}</footer>
  )
}

export default Footer;