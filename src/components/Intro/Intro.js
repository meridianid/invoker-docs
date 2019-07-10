import styles from './Intro.module.scss'
import React from 'react'
import cx from 'classnames'

import Container from '../../layouts/Container/Container'
import Text from '../Text/Text'
import Button from '../Button/Button';

const Hero = ({
  className,
  text,
  ...restProps
  }) => {
  return (
    <Container className={styles.container}>
      <div className={cx(styles.root, className)} {...restProps}>
        <Text display2 component="h1" breakWord style={{marginBottom: '12px'}}>m.id<span style={{ fontWeight: '400', paddingLeft: '8px', opacity: 0.44}}>invoker</span></Text>
        <Text heading3 component="p" className={styles.intro}>
          Making useful and beautiful digital products possible for everyone.
        </Text>
        <Text large component="p" className={styles.description}>
          <strong>mi.id</strong><span style={{opacity: 0.54, paddingLeft: '0px'}}>invoker</span> is a set of highly opiniated tools, components, and guidelines that helps our team at Meridian.id building website better & faster with best development experiences.
        </Text>
        <Text large component="p" className={styles.description} style={{ marginBottom: '48px' }}>
          If you like <strong className={styles.highlights}>React Hooks</strong>, <strong className={styles.highlights}>SCSS</strong>, <strong className={styles.highlights}>CSS Modules</strong>, and <strong className={styles.highlights}>Component-based Design</strong>. Give it a try! We sure you will like it too.
        </Text>
        <Button primary large>Get Started</Button>
      </div>
    </Container>
  )
}

export default Hero
