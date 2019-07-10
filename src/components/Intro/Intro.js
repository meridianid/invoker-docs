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
        <Text display1 component="h1" breakWord style={{marginBottom: '12px'}}>Invoker<span style={{paddingLeft: '12px', opacity: 0.33}}>101</span></Text>
        <Text heading3 component="p" className={styles.intro}>
          Making well-designed digital products possible for everyone.
        </Text>
        <Text medium component="p" className={styles.description}>
          <strong>Invoker101</strong> is a set of highly opiniated tools, components, and guidelines that helps our team at Meridian.id building website better & faster with best development experiences.
        </Text>
        <Text medium component="p" className={styles.description}>
          If you like <strong className={styles.highlights}>React Hooks</strong>, <strong className={styles.highlights}>SCSS</strong>, <strong className={styles.highlights}>CSS Modules</strong>, and <strong className={styles.highlights}>Component-based Design</strong>. Give it a try! We sure you will like it too.
        </Text>
        <Button primary large>Get Started</Button>
      </div>
    </Container>
  )
}

export default Hero
