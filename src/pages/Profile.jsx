import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = ({person}) => {
    const {username} = useParams()

    // console.log(params);
    
  return (
    <div>This is a profile for: {username} an employee of {person}</div>
  )
}

export default Profile