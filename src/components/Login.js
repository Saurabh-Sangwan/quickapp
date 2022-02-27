import React from 'react'
import {users, login} from   './UserData'
import { useState } from 'react';
// import { Redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {

    function checkUser(username, password){
        const name = username
        const pass = password
        
        if(users.names.indexOf(name) === -1){
          alert("User doesn't exist")  
        }else if(pass == users.passwords[users.names.indexOf(name)] ){
          login.status = true
          login.name = name
          login.password = password
          console.log(login)
          alert("Authentication Successful, You will be redirected to home page");
          // <Redirect to="/Home" />
          navigate("/home");
        }
      }
    const navigate = useNavigate()
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
  return (
    <div>        
        Login<br/>
        <input type="text" onChange={(e) => setusername(e.target.value)}/><br/>
        <input type="password" onChange={(e) => setpassword(e.target.value)}/><br/>
        <button type="submit" onClick={() => checkUser(username, password)}>Login</button>
    </div>
  );
}

export default Login