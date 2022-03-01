import React from 'react'
import {login, post} from   './UserData'
import { useState } from 'react'

function Home() {
  const [newpost, setnewpost] = useState('')
  const [dispost, setdispost] = useState({})
  var count = 0
  const {name} = login
  const newpo = post("Ram","HELLO", "LIKE IT", 1)
  const addPost = (par) => {
    count +=1
    const text = par
    const tempost= post(name, text, '', count)
    console.log(tempost)
    setdispost(tempost)
  }

  console.log(newpo)
  return (
    <div>Home
        <br/>
    {`Welcome ${name}`}<br/>
    <h3> New post from {newpo.user} </h3>
    <h1>{newpo.postsave}</h1>    
    <h4>Comments:<br/>{newpo.commentsave}</h4>

    {dispost.postsave}<br/>

    Create new post <h1>+</h1>
    <textarea rows='10' cols='60' onChange={(e) => setnewpost(e.target.value)} />
    <button onClick={() => addPost(newpost)}>ADD POST</button>
    </div>
  );
}

export default Home