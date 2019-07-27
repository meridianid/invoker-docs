// import styles from './MultiKeyExample.module.scss';
import React from 'react'
// import cx from 'classnames';
import Text from '../Text/Text'

const MultiKeyExample = ({ children, className, ...restProps }) => {
  return (
    <div {...restProps}>
      <Text component="p">Hello world!</Text>
    </div>
  )
}

export default MultiKeyExample
