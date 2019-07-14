import styles from './DefaultMdx.module.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { Container } from 'unified-ui'

import './../../sass/invoker-layout/grid.module.scss'
import '../../assets/fonts/fonts'

import Navbar from '../../components/Navbar/Navbar'
import MainContent from '../MainContent/MainContent'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Text from '../../components/Text/Text'
import CodeAlt from '../CodeAlt/CodeAlt'

const componentSerializer = {
  h1: props => (
    <Text heading1 component="h1" className={styles.heading1} {...props} />
  ),
  h2: props => (
    <Text heading2 component="h2" className={styles.heading2} {...props} />
  ),
  h3: props => (
    <Text heading3 component="h3" className={styles.heading3} {...props} />
  ),
  h4: props => (
    <Text heading4 component="h4" className={styles.heading4} {...props} />
  ),
  h5: props => (
    <Text heading5 component="h5" className={styles.heading5} {...props} />
  ),
  h6: props => (
    <Text heading6 component="h6" className={styles.heading6} {...props} />
  ),
  p: props => (
    <Text medium component="p" className={styles.paragraph} {...props} />
  ),
  li: props => (
    <Text medium component="li" className={styles.listItem} {...props} />
  ),
  // pre: props => <pre {...props}/>,
  code: CodeAlt,
}

const DefaultMdx = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleMdxQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <main>
        <Navbar bleed />
        <div className={styles.page}>
          <LeftSidebar />
          <MainContent post fixedLeft className={styles.mdx}>
            <MDXProvider components={componentSerializer}>
              <Container {...props} />
            </MDXProvider>
          </MainContent>
        </div>
      </main>
    )}
  />
)

DefaultMdx.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultMdx
