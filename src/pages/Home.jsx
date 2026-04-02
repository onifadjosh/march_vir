import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>This is my home page  <Link to={'/employee/dashboard'}>Dashboard</Link></div>
  )
}

export default Home