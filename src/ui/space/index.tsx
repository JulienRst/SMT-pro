import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

interface SpaceProps {
  id?: string;
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
  id,
}) => {
  return (
    <div
      id={id}
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