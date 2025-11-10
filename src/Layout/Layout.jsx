import React from 'react'
import Home from '../Pages/Home'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer/Footer'
import Button from '../Components/Them/Button'

export default function Layout() {
  return (
    <div className='bg-[#212121]'>

         <Navbar></Navbar>
         <Outlet />
         <Footer></Footer>
        
      
    </div>
  )
}
