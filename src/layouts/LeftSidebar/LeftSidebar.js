import styles from './LeftSidebar.module.scss';
import React from 'react';
import cx from 'classnames';

const LeftSidebar = ({
  children,
  className,
  ...restProps
  }) => {
  return (
    <section
      className={cx({
        [styles.root]: true,
        [className]: className,
      })}
      {...restProps}>
      {children}
    </section>
  )
}

export default LeftSidebar