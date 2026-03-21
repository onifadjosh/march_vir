import React from 'react'

const Button = () => {
    const shout=(name)=>{
        alert(`You have bought this item ${name}`)
    }
  return (
  <button className='btn btn-dark' onClick={()=>shout("Pamilerin")}>Buy now</button>
  )
}

export default Button