import styles from './NavSidebar.module.scss';
import React from 'react';
import cx from 'classnames';
import Link from '../Link/Link';

const NavSidebar = ({
  children,
  containerClassName,
  activeClassName,
  className,
  to,
  ...restProps
  }) => {
  return (
    <li
      className={cx({
        [styles.root]: true,
        [containerClassName]: containerClassName
      })}
      {...restProps}>
      <Link
        to={to}
        className={cx({
          [styles.menu]: true,
          [className]: className
        })}
        activeClassName={cx({
          [styles.active]: true,
          [activeClassName]: activeClassName
        })}
        >
        {children}
      </Link>
    </li>
  )
}

export default NavSidebar