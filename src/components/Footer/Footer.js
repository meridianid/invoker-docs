import styles from './Footer.module.scss'
import React from 'react'
import cx from 'classnames'

import Container from '../../layouts/Container/Container'
import Text from '../Text/Text'
import { Wordmark } from '../Brand/Brand'

const Footer = ({
  className,
  ...restProps
  }) => {
  return (
    <>
      <footer className={cx(styles.root, className)} {...restProps}>
        <Wordmark />
        <div className={styles.contacts}>
          <Text medium component="p"><strong>#dowhatyoulove</strong></Text>
        </div>
      </footer>
    </>
  )
}

export default Footer
