import React from 'react'
import { useState } from 'react';
import {users} from './UserData'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import UserData from './UserData';

function Registration() {  
  const navigate = useNavigate()
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")

  function addUser(username, password){
    const name = username
    const pass = password
    if(users.names.indexOf(name) === -1){
      users.names.push(name)
      users.passwords.push(pass)
      console.log(users)      
      alert("Registration Successful, You will be redirected to login page!")
      navigate('login')
    }else{
      alert("Username already exists");
    }
  }
  return (
    <div>
      Registration <br/>
      <input type="text" id="name" onChange={(e) => setusername(e.target.value)}/><br/>
      <input type="password" id="password" onChange={(e) => setpassword(e.target.value)}/><br/>
     
      {/* {username}
      {password} */}
      
      <button type="submit" onClick={() => addUser(username, password)}>Register</button>
      Already registered?
      {/* <a href={`Login`}>Login</a> */}
      <Link to="Login">LOGIN</Link>
      </div>
  );
}

export default Registration