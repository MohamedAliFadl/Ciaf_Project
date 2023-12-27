import React, { Fragment } from 'react'
import { ContactUS, Footer, Navbar } from '../Component/Index_Imports'

const ContactLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <ContactUS />
      <Footer />
    </Fragment>
  )
}

export default ContactLayout
