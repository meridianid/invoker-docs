import React from 'react'

import Blog from './../layouts/Blog/Blog'
import Footer from '../components/Footer/Footer'
// import Blogs from '../components/Blogs/Blogs'
import Container from '../layouts/Container/Container'

const BlogsPage = ({ className, ...restProps }) => {
  return (
    <Blog>
      {/* <Blogs /> */}
      <Container>
        <Footer />
      </Container>
    </Blog>
  )
}

export default BlogsPage
