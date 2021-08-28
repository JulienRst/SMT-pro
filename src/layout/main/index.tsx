import React from 'react';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import styles from './index.module.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.layoutMain}>
      <Menu />
      <div className={styles.content} >{children}</div>
      <Footer />
    </div>
  )
}

export default Layout;