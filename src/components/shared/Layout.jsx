import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <div>

    <Outlet/>
    <Header/>
    </div>
  )
}

export default Layout