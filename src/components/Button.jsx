import React from 'react'

const Button = ({title, color, func}) => {
  // console.log(props);
  
    const shout=(name)=>{
        alert(`You have bought this item ${name}`)
    }
  return (
  <button className={`btn ${color}`} onClick={func}>{title}</button>
  )
}

export default Button