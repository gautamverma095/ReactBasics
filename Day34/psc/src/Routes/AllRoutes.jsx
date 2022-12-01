import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Users from './Users'
import SingleUser from './SingleUser'
import PrivateContext from '../Context/PrivateContext'

const AllRoutes = () => {
  return (
    <>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/users' element={
          <PrivateContext>
            <Users />
          </PrivateContext>

        } />
        <Route path='/users/:id' element={
          <PrivateContext>
          <SingleUser />
          </PrivateContext>} />



      </Routes>


    </>
  )
}

export default AllRoutes