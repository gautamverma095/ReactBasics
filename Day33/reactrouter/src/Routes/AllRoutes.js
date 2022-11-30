import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PerivateRoute from '../Context/PerivateRoute'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import SIngleUserPage from './SIngleUserPage'
import Users from './Users'



const AllRoutes = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='users' element={
          <PerivateRoute>
            <Users />
          </PerivateRoute>
        } />
        <Route path='users/:id' element={
          <PerivateRoute>
            <SIngleUserPage />
          </PerivateRoute>
        } />
      </Routes>
    </>
  )
}

export default AllRoutes