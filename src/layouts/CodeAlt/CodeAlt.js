/* eslint react/jsx-key: 0 */
import React from 'react'
import styles from './CodeAlt.module.scss'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import 'prismjs'
import cx from 'classnames'
import 'prismjs/components/prism-jsx.min'

import Button from './../../components/Button/Button'
import Text from './../../components/Text/Text'

import Box from './../../layouts/Box/Box'
import Container from './../../layouts/Container/Container'
import Section from './../../layouts/Section/Section'

import theme from 'prism-react-renderer/themes/oceanicNext'

export default ({ children, className, live, render }) => {
  const language = className.replace(/language-/, '')

  const scope = { Button, Text, Container, Box, Section }

  if (live) {
    return (
      <div className={cx('gatsby-highlight', styles.font, styles.root)}>
        <LiveProvider code={children.trim()} theme={theme} scope={scope}>
          <LivePreview style={{ marginBottom: '24px' }} />
          <LiveEditor style={{ backgroundColor: 'rgb(40, 44, 52)' }} />
          <LiveError />
        </LiveProvider>
      </div>
    )
  }

  if (render) {
    return (
      <div style={{ marginTop: '40px' }}>
        <LiveProvider code={children.trim()} theme={theme}>
          <LivePreview />
        </LiveProvider>
      </div>
    )
  }

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        // tokens.splice(-1,1)
        return (
          <div className={cx('gatsby-highlight')}>
            <pre className={cx(className, styles.root)} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          </div>
        )
      }}
    </Highlight>
    // <div className={cx(styles.root, 'gatsby-highlight')}>
    //   <pre className={cx('gatsby-code-jsx')}>
    //     <code className={cx('language-jsx', 'gatsby-code-jsx', styles.font)}>
    //       {children.trim()}
    //     </code>
    //   </pre>
    // </div>
  )
}
