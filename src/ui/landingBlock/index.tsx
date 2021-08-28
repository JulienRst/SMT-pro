import React from 'react';
import styles from './index.module.scss';
import Space from 'ui/space';

const LandingBlock: React.FC = ({ children }) => {
  return <Space className={styles.landingBlock}>{children}</Space>
}

export default LandingBlock;