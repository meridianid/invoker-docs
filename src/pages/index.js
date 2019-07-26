import React from 'react'

import Default from './../layouts/Default/Default'
import Intro from '../components/Intro/Intro'
import SEO from '../utils/seo'

const HomePage = ({ className, ...restProps }) => {
  return (
    <Default {...restProps}>
      <SEO title="Homepage" />
      <Intro />
    </Default>
  )
}

export default HomePage
