import React, { Fragment } from 'react'
import './App.css'
// import { Route , Routes } from 'react-router-dom'
import {AboutLayout, BoardMemberLayout, ContactLayout, Home, Proload, Servicelayout} from './Component/Index_Imports'
import { Route, Routes } from 'react-router-dom'
// import $ from 'jquery'

const App = () => {
  return (
    <Fragment>
      <Proload />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutUS' element={<AboutLayout />} />
        <Route path='/services' element={<Servicelayout />} />
        <Route path='/ContactUS' element={<ContactLayout />} />
        <Route path='/BoardMembers' element={<BoardMemberLayout />} />
      </Routes>
    </Fragment>
  )
}

export default App