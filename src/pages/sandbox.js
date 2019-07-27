import React from 'react'

import Default from './../layouts/Default/Default'
import SEO from '../utils/seo'

import {
  useEventListener,
  useScrollPosition,
  defaultThrottler,
} from './../hooks'
import Text from '../components/Text/Text'

const Sandbox = ({ className, ...restProps }) => {
  useEventListener('click', event => console.log(event))

  const { x, y } = useScrollPosition(defaultThrottler)

  return (
    <Default {...restProps}>
      <SEO title="Sandbox" />
      <Text heading1 component="h1">
        Sandbox
      </Text>
      <Text large component="p" style={{ marginBottom: '48px' }}>
        Dump area for components experimentation
      </Text>
      <div>
        <Text heading2 component="h2">
          Scroll Position
        </Text>
        <Text large component="p">
          Here're your scroll position:{' '}
          <strong>
            x: {x}px / y: {y}px
          </strong>
        </Text>
      </div>
    </Default>
  )
}

export default Sandbox
