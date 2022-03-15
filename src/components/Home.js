import React from 'react'
import {login, post} from   './UserData'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
function Home() {
  useEffect(
    () => {
      console.log('Something')
    
  },[dummy])
  var store = post.comments
  var ls = post.likeStatus
  var dummy = "Hi"
  const [comms, setcomms] = useState(store)
  const [like, setlike] = useState(ls) 
  const [comm, setcomm] = useState('')
  const [ignition, setignition] = useState(':D')
  const {name} = login

  const likeHandler = (index) => {
    var id = index
    like[id] = !(like[id])
    console.log(like)
  }

  const commHandler = (index, com) => {
    var id = index
    var comment = com
    comms[id].push(comment)
    console.log(comms)
  }

  return (
    <div>Home {console.log(like)}
        <br/>
    
    <h1 className='App-link'>{`Welcome ${name}`}</h1><br/>
    <Link to='CreatePost'>CLICK HERE TO CREATE A POST</Link>
    <h2>YOUR TIMELINE:</h2>
    {
      post.feed.map((post, index) => (
          <ul key={index}>
            {post}
            <button className={`${ls[index]}class`} onClick={() => {likeHandler(index); dummy = 'active'} }>LIKE</button>
            {console.log("MISS ME?")}<br/>
            <input type='text' onChange={(e) => {setcomm(e.target.value)}}/>      
            <button  onClick={() =>{ commHandler(index,comm); dummy = 'active'} }>Comment</button><br/>
            {comms[index]}    
          </ul>
      ))
    }

  
    </div>
  );
}

export default Home