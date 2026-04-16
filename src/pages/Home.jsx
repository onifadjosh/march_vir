import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {
  const count = useSelector((state)=>state.count)
  return (
    <div>This is my home page for {count}  <Link to={'/employee/dashboard'}>Dashboard</Link></div>
  )
}

export default Home