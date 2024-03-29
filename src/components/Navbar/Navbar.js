import styles from './Navbar.module.scss'
import React from 'react'
import cx from 'classnames'

import Container from '../../layouts/Container/Container'
import Link from './../Link/Link'
import { StarterAlt as BrandLogo } from '../Brand/Brand'
import NavbarSecondary from '../NavbarSecondary/NavbarSecondary'
import NavbarPrimary from '../NavbarPrimary/NavbarPrimary'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Button from '../Button/Button'

import {Github} from '../SocialIcons/SocialIcons'

const Navbar = ({ bleed, narrow, children, className, ...restProps }) => {
  return (
    <Container bleed={bleed} narrow={narrow} className={styles.container}>
      <nav
        className={cx({
          [styles.root]: true,
          [className]: className
        })}
        {...restProps}
      >
        <NavbarPrimary>
          <Link to="/">
            <BrandLogo />
          </Link>
        </NavbarPrimary>
        <NavbarSecondary>
          <NavbarMenu to="/blogs">Blogs</NavbarMenu>
          <NavbarMenu to="/about">About</NavbarMenu>
          <a href="https://github.com/meridianid/tinker-cli" target="_blank" rel="noreferrer noopener">
            <Github style={{width: '28px', marginLeft: '16px', marginRight: '8px'}}/>
          </a>
        </NavbarSecondary>
      </nav>
    </Container>
  )
}

export default Navbar
