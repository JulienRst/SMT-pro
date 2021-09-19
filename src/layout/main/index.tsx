import React, { useEffect } from 'react';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import styles from './index.module.scss';

interface LayoutProps {
  scrollableRef?: React.RefObject<HTMLDivElement>
}

const Layout: React.FC<LayoutProps> = ({ children, scrollableRef }) => {
  // The trick for CSS
  // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  const setVhSize = () => {
    let vh = window.innerHeight / 100;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }


  useEffect(() => {
    window.addEventListener('resize', setVhSize);
    setVhSize();
    return window.removeEventListener('resize', setVhSize);
  })

  return (
    <div className={styles.layoutMain}>
      <Menu />
      <div ref={scrollableRef} className={styles.content} >{children}</div>
      <Footer />
    </div>
  )
}

export default Layout;