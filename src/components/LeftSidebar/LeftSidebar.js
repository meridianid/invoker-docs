import styles from './LeftSidebar.module.scss'
import React from 'react'
import cx from 'classnames'
import LeftSection from '../../layouts/LeftSection/LeftSection'
import NavSidebar from '../NavSidebar/NavSidebar'

const LeftSidebar = ({ className, ...restProps }) => {
  return (
    <LeftSection fixed>
      <ul className={cx(styles.container, styles.root)} {...restProps}>
        <NavSidebar to="/">Introduction</NavSidebar>
        <NavSidebar to="/building-website-101">Building Website 101</NavSidebar>
        <NavSidebar to="/getting-started">Getting Started</NavSidebar>
        <ul className={styles.container}>
          <NavSidebar to="/invoker-gatsby">Gatsby</NavSidebar>
          <NavSidebar to="/invoker-next">Next.js</NavSidebar>
          <NavSidebar to="/invoker-crapp">Create React App</NavSidebar>
        </ul>
        <NavSidebar to="/sandbox">Sandbox</NavSidebar>
        <NavSidebar to="/what-we-use">What we use?</NavSidebar>
        <ul className={styles.container}>
          <NavSidebar to="/css-modules">CSS Modules</NavSidebar>
          <NavSidebar to="/inline-svg">Inline SVG</NavSidebar>
        </ul>
        <NavSidebar to="/styleguide">Styleguide</NavSidebar>
        <NavSidebar to="/design-tokens">Design Tokens</NavSidebar>
        <NavSidebar to="/components-library">Components Library</NavSidebar>
        <NavSidebar to="/react-hooks">React Hooks</NavSidebar>
        <ul className={styles.container}>
          <NavSidebar to="/use-event-listener">useEventListener</NavSidebar>
          <NavSidebar to="/use-is-mounted">useIsMounted</NavSidebar>
          <NavSidebar to="/use-is-online">useIsOnline</NavSidebar>
          <NavSidebar to="/use-key-press">useKeyPress</NavSidebar>
          <NavSidebar to="/use-lock-body-scroll">useLockBodyScroll</NavSidebar>
          <NavSidebar to="/use-media-query">useMediaQuery</NavSidebar>
          <NavSidebar to="/use-multi-key-press">useMultiKeyPress</NavSidebar>
          <NavSidebar to="/use-scroll-position">useScrollPosition</NavSidebar>
        </ul>
        <NavSidebar to="/editors">Editors</NavSidebar>
        <NavSidebar to="/deployments">Deployments</NavSidebar>
        <ul className={styles.container}>
          <NavSidebar to="/netlify">Netlify</NavSidebar>
          <NavSidebar to="/now-sh">Now.sh</NavSidebar>
        </ul>
        <NavSidebar to="/seo">SEO</NavSidebar>
        <NavSidebar to="/support">Support</NavSidebar>
      </ul>
    </LeftSection>
  )
}

export default LeftSidebar
