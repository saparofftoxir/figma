import React, { lazy } from 'react'
import {  Routes } from 'react-router-dom'
const Header=lazy(()=>import("../pages/Header"))
const Main=lazy(()=>import("../pages/Main"))
function Layout() {
  return (
    <div className='w-full h-screen'>
      <Header/>
        <Main/>
        <Routes>
        </Routes>
    </div>
  )
}

export default Layout
