import React from 'react';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import styles from './index.module.scss';

interface LayoutProps {
  scrollableRef?: React.RefObject<HTMLDivElement>
}

const Layout: React.FC<LayoutProps> = ({ children, scrollableRef }) => {
  return (
    <div className={styles.layoutMain}>
      <Menu />
      <div ref={scrollableRef} className={styles.content} >{children}</div>
      <Footer />
    </div>
  )
}

export default Layout;