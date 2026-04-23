import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Effectt = () => {
    // const [first, setfirst] = useState(second)
    const [number, setnumber] = useState(0)
    const [name, setname] = useState("Josh")


   useEffect(()=>{
    console.log("use effect ran");

    return()=>{
        alert("are you sure you want to leave?")
    }
    
    
   }, [name])

//    [] -> dependency array
   //when there is no dependecy array, the use effect runs onload and when any state changes
   //when there is empty dependecy array, the useeffct runs onload and doesn't run again
   //when there is dependecy array with a state inside, onload useeffect runs, when the particular state changes it runs again

    
  return (
    <div>
        <h1 onClick={()=>setnumber(number+1)}>{number}</h1>

        <h1 onClick={()=>setname("pampam")}>{name}</h1>


        <Link to={'/'}>Home</Link>
    </div>
  )
}

export default Effectt