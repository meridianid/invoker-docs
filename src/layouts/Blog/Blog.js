import styles from './Blog.module.scss'
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./Blog.module.scss"
import './../../sass/invoker-layout/grid.module.scss'
import '../../assets/fonts/fonts'

import Navbar from "../../components/Navbar/Navbar"

const Blog = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteBlogTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <main className={styles.root}>
        <Navbar/>
        {children}
      </main>
    )}
  />
)

Blog.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Blog
