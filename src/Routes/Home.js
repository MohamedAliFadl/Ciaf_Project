import React, { Fragment } from 'react'
// import Navbar from '../Component/Home/Navbar'

import {Navbar ,SlideShow, BusinessGrowth, AboutUSComponent, BoardMemberHome, Footer} from '../Component/Index_Imports'

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <SlideShow />
      <BusinessGrowth />
      <AboutUSComponent />
      <BoardMemberHome />
      <Footer />
    </Fragment>
  )
}

export default Home
