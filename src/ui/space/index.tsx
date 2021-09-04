import React from 'react';
import classnames from 'classnames';
import './index.scss';
interface SpaceProps {
  id?: string;
  className?: string;
  direction?: 'vertical' | 'horizontal';
  align?: 'start' | 'middle' | 'end' | 'baseline';
  size?: 'small' | 'medium' | 'large';
  justify?: 'start' | 'center' | 'space-around' | 'space-between' | 'end';
}

const Space: React.FC<SpaceProps> = ({
  direction = 'horizontal',
  align = 'start',
  size = 'small',
  justify = 'start',
  className,
  children,
  id,
}) => {
  return (
    <div
      id={id}
      className={classnames(
        'space',
        `dir-${direction}`,
        `align-${align}`,
        `size-${size}`,
        `justify-${justify}`,
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Space;