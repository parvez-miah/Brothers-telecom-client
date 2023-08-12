import React from 'react'
import Nav from '../Shared/NavigationBar/NavigationBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'
import NavigationBar from '../Shared/NavigationBar/NavigationBar'

export const Main = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>


    </>
  )
}
