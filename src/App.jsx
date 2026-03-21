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

const App = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [allUsers, setallUsers] = useState([]);

  // const handleInput=(event)=>{
  //   // console.log("this is working");
  //   console.log(event.target.value);

  //   setfirstName(event.target.value)
  // }

  const submitUser = () => {
    let user = {
      firstName,
      lastName,
      email,
      password,
    };

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

  const editUser=(index, user)=>{
    let newAllUsers = [...allUsers]

    newAllUsers.splice(index,1, user)

    setallUsers(newAllUsers)
  }
  return (
    <div>
      <input
        type="text"
        placeholder="first name"
        onChange={(e) => setfirstName(e.target.value)}
      />

      <input
        type="text"
        placeholder="last name"
        onChange={(e) => setlastName(e.target.value)}
      />

      <input
        type="text"
        placeholder="email"
        onChange={(e) => setemail(e.target.value)}
      />

      <input
        type="text"
        placeholder="password"
        onChange={(e) => setpassword(e.target.value)}
      />

      <button onClick={submitUser}>submit</button>

      <hr />

     <div className="d-flex flex-wrap gap-3">
     {allUsers.map((user, index) => (
        <div className="card" style={{ width: "18rem" }} key={index}>
          <div className="card-body">
            <h5 className="card-title">
              {user.firstName + " " + user.lastName}
            </h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
             {user.email}
            </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <div className="d-flex gap-2">
              <button className="btn btn-dark" onClick={()=>deleteUser(index)}>Delete</button>

              <button className="btn btn-dark">Edit</button>
            </div>
          </div>
        </div>
      ))}
     </div>
    </div>
  );
};

export default App;
