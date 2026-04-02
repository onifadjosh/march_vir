import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>EPP ME EPP ME , USER DEY CARRY ME GO WHERE I NO KNOW</h1>

      <button onClick={()=>navigate('/')} className='btn btn-dark'>Go Home</button>
    </div>
  )
}

export default Notfound