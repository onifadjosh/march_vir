import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFriends, decreaseCount, increaseByNum, increaseCount } from '../redux/appSlice'

const Contact = () => {
  const count = useSelector((state)=>state.count)
  const firstName = useSelector((state)=>state.firstName)
  const ore = useSelector((state)=>state.friends)
  const [number, setnumber] = useState(0)
  const [friends, setfriends] = useState('')

  let dispatch = useDispatch()


  return (
    <div>This is a contact page     <h1>{firstName}</h1>
    
    
    <input type="number" placeholder='put your increase here' onChange={(e)=>setnumber(e.target.value)}/><br />
   <div className='d-flex align-items-center gap-3'>
   <button className='btn btn-danger' onClick={()=>dispatch(decreaseCount())}>-</button>
    <h1>{count}</h1>
    <button className='btn btn-success' onClick={()=>dispatch(increaseCount())}>+</button>
    <button className='btn btn-success' onClick={()=>dispatch(increaseByNum(Number(number)))}>+{number}</button>
   </div>

   <hr />

   <input type="text" onChange={(e)=>setfriends(e.target.value)}  placeholder='enter your friend name'/>

   <button className='btn btn-dark' onClick={()=>dispatch(addFriends(friends))}>Submit</button>

    {
      ore.map((_, idx)=>(
        <h1>{idx+1}. {_}</h1>
      ))
    }


    
    </div>
  )
}

export default Contact