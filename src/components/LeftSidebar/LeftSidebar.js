import styles from './LeftSidebar.module.scss';
import React from 'react';
import cx from 'classnames';
import LeftSection from '../../layouts/LeftSection/LeftSection';
import NavSidebar from '../NavSidebar/NavSidebar';

const LeftSidebar = ({
  className,
  ...restProps
  }) => {
  return (
    <LeftSection fixed>
      <ul className={cx(styles.container, styles.root)} {...restProps}>
        <NavSidebar to="/">Introduction</NavSidebar>
        <ul className={styles.container}>
          <NavSidebar to="/react-hooks">Building Website 101</NavSidebar>
          <NavSidebar to="/css-modules">CSS Modules</NavSidebar>
        </ul>
        <NavSidebar to="/playground">Playground</NavSidebar>
        <NavSidebar to="/getting-started">Getting Started</NavSidebar>
        <ul className={styles.container}>
          <NavSidebar to="/invoker-gatsby">Gatsby</NavSidebar>
          <NavSidebar to="/invoker-next">Next.js</NavSidebar>
          <NavSidebar to="/invoker-crapp">Create React App</NavSidebar>
        </ul>
        <NavSidebar to="/styleguide">Styleguide</NavSidebar>
        <NavSidebar to="/css-modules">Design Tokens</NavSidebar>
        <NavSidebar to="/components">Components</NavSidebar>
        <ul className={styles.container}>
          <NavSidebar to="/core-components">Cores</NavSidebar>
          <NavSidebar to="/layout-components">Layouts</NavSidebar>
          <NavSidebar to="/high-level-components">High Level</NavSidebar>
          <NavSidebar to="/utility-components">Utilities</NavSidebar>
        </ul>
        <NavSidebar to="/text-editors">Editor</NavSidebar>
        <NavSidebar to="/support">Support</NavSidebar>
      </ul>
    </LeftSection>
  )
}

export default LeftSidebar