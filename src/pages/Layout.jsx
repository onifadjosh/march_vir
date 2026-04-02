import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='d-flex'>
        <div className='bg-primary d-flex flex-column justify-content-start p-4 align-items-center' style={{flexBasis:"20%", height:"100vh"}}>

            <Link to={"/employee/dashboard"} className='text-light'>Dashboard</Link>

            <Link to={"/"} className='text-light'>Home</Link>


        </div>
        <div className='' style={{flexBasis:"80%"}}>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout