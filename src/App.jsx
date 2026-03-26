// import React, { useState } from 'react'
// import Button from './components/Button';

// const App = () => {

//   let designForText={backgroundColor:"red", color:"white"}

//   let namee = "sayo"
//   // const [num, setNum]= useState(0)
//   // num-> variable that holds the state
//   // setNum-> function that updates the state
//   // useState(0)-> initializes the state with a default value of 0

//   const [num, setnum] = useState(10)

//   const [name, setname] = useState("pampam")
//   const increaseNum=()=>{

//     setnum(num+1)
//     console.log(num);

//   }
//   return (

//     <>
//       <div className='design'>This is my first react application</div>

//       <div style={designForText}>This is another div in my react app</div>

//       <Button/>
//       <Button/>
//       <Button/>
//       <Button/>
//       <Button/>
//       <Button/>
//       <Button/>
//       <Button/>
//       <Button/>
//       <Button/>
//       <Button/>
//       <Button/>

//     <h1>
//       {`The name of this iuser is  ${namee}`}
//     </h1>

//     <h1>{num}</h1>

//     <button onClick={increaseNum}>click me to increase num</button>

//     <h1>{name}</h1>

//     <button onClick={()=>setname("Josh")}>change name</button>
//     </>

//   )
// }

// export default App;

import React from "react";
import { useState } from "react";
import Button from "./components/Button";
import AddUser from "./components/AddUser";
import DisplayUser from "./components/DisplayUser";

const App = () => {
 

  const [allUsers, setallUsers] = useState([]);
 

  // const handleInput=(event)=>{
  //   // console.log("this is working");
  //   console.log(event.target.value);

  //   setfirstName(event.target.value)
  // }

  const shoutName=()=>{
    alert("sade is here")
  }

  const submitUser = (user) => {
    // let user = 
    // {
    //   firstName,
    //   lastName,
    //   email,
    //   password,
    // };

    console.log(user);
    let fruits = ["orange", "banana", "mango"];
    let newFruits = [...fruits, "guava", "watermelon"];

    console.log(newFruits);

    let newAllUsers = [...allUsers, user];

    setallUsers(newAllUsers);
  };


  const deleteUser=(index)=>{
    let newAllUsers = [...allUsers]

    newAllUsers.splice(index,1)

    setallUsers(newAllUsers)
  }

  // [
  //   {},{},{},{}
  // ]

  const editUser=(index, user)=>{
    let newAllUsers = [...allUsers]

    newAllUsers.splice(index,1, user)

    setallUsers(newAllUsers)
  }
  return (
    <div>
      
      <AddUser submitUser={submitUser}/>
      <hr />
  

     <DisplayUser allUsers={allUsers} deleteUser={deleteUser} editUser={editUser}/>


<Button title="stop" color="btn-danger" func={shoutName}/>
<Button title="Go" color="btn-success"/>
<Button title="Wait" color="btn-warning"/>
    </div>
  );
};

export default App;
