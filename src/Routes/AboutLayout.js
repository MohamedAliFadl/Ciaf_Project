import React, { Fragment } from 'react'
import { AboutUS, Footer, Navbar } from '../Component/Index_Imports'

const AboutLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <AboutUS />
      <Footer />
    </Fragment>
  )
}

export default AboutLayout
