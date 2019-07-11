import React from 'react'

import Default from './../layouts/Default/Default'
import Intro from '../components/Intro/Intro'
import Footer from '../components/Footer/Footer'
import SEO from '../utils/seo';
import LeftSection from '../layouts/LeftSection/LeftSection';
import MainContent from '../layouts/MainContent/MainContent';
// import WhoWeAre from '../components/WhoWeAre/WhoWeAre'

const HomePage = ({
  className,
  ...restProps
  }) => {
  return (
    <Default>
      <SEO title="Homepage" />
      <Intro />
      {/* <WhoWeAre /> */}
      {/* <Footer /> */}
    </Default>
  )
}

export default HomePage
