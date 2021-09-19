import React from 'react';
import images from 'ui/images';
import LandingBlock from 'ui/landingBlock';
import Logo from 'ui/logo';
import styles from './index.module.scss';

const Hero: React.FC = () => {
  return <LandingBlock full>
    <div className={styles.heroContainer}>
      <div className={styles.background}>
        <img src={images.SoudeurHero} alt="soudeur" />
      </div>
      <div className={styles.title}>
        <Logo />
      </div>
    </div>
  </LandingBlock>;
}

export default Hero;