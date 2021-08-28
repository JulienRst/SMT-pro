import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

interface SpaceProps {
  className?: string;
  direction?: 'vertical' | 'horizontal';
  align?: 'start' | 'middle' | 'end' | 'baseline';
  size?: 'small' | 'medium' | 'large';
}

const Space: React.FC<SpaceProps> = ({
  direction = 'horizontal',
  align = 'start',
  size = 'small',
  className,
  children,
}) => {
  return (
    <div
      className={classnames(
        styles.space,
        styles[`dir-${direction}`],
        styles[`align-${align}`],
        styles[`size-${size}`],
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Space;