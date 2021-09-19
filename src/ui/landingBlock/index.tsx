import React from 'react';
import styles from './index.module.scss';
import Space from 'ui/space';
import classnames from 'classnames';
import Routes from 'routes';

interface LandingBlockProps {
  full?: boolean;
  slug?: Routes;
}

const LandingBlock: React.FC<LandingBlockProps> = ({ children, full = false, slug }) => {
  return (
    <Space
      id={slug}
      direction="vertical"
      className={classnames(styles.landingBlock, !full && styles.withPadding)}
    >
      {children}
    </Space>
  );
}

export default LandingBlock;