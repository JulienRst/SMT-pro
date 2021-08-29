import React from 'react';
import styles from './index.module.scss';
import Space from 'ui/space';
import classnames from 'classnames';

interface LandingBlockProps {
  full?: boolean;
}

const LandingBlock: React.FC<LandingBlockProps> = ({ children, full = false }) => {
  return <Space className={classnames(styles.landingBlock, !full && styles.withPadding)}>{children}</Space>
}

export default LandingBlock;