import styles from './Default.module.scss'
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./Default.module.scss"
import './../../sass/invoker-layout/grid.module.scss'
import '../../assets/fonts/fonts'

import Navbar from "../../components/Navbar/Navbar"
import SEO from "./../../utils/seo"
import LeftSection from '../LeftSection/LeftSection';
import MainContent from '../MainContent/MainContent';
import NavSidebar from '../../components/NavSidebar/NavSidebar';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';

const Default = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <main className={styles.root}>
        <Navbar bleed/>
        <div className={styles.page}>
          <LeftSidebar />
          <MainContent fixedLeft>
            {children}
          </MainContent>
        </div>
      </main>
    )}
  />
)

Default.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Default
