import styles from './LeftSection.module.scss';
import React from 'react';
import classnames from 'classnames';

const LeftSection = ({ children, fixed, className, ...restProps }) => {
  return (
    <div
      className={classnames({
        [styles.root]: true,
        [styles.fixed]: fixed,
        [className]: className
      })}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default LeftSection;
