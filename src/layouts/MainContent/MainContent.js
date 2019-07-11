import styles from './MainContent.module.scss';
import React from 'react';
import cx from 'classnames';
import Container from '../Container/Container';

const MainContent = ({ children, fixedLeft, className, ...restProps }) => {
  return (
    // <div
    //   {...restProps}
    //   className={cx({
    //     [styles.root]: true,
    //     [styles.fixedLeft]: fixedLeft,
    //     [className]: className
    //   })}
    // >
    <Container narrow>
      {children}
    </Container>
    // {/* </div> */}
  );
};

export default MainContent;
