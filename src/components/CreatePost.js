import React from 'react'
import { post, login } from './UserData'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function CreatePost() {
    useEffect(() => {
    
  
        return () => {
          
        }
      }, [])
      
  const [newpost, setnewpost] = useState('')
  const [textareainput, settextareainput] = useState()
  var count = 0
  const {name} = login

  const addPost = (par) => {
    const postText = par;
    post.feed.push(postText);
    post.user = name ;
    alert("Post added, Your post will be reflected in Timeline");
    console.log(post)
    settextareainput("")
    settextareainput()

  }

  return (
    <div>
        

    Create new post:<br/>
    <textarea rows='10' cols='60' value={textareainput}  onChange={(e) => setnewpost(e.target.value)} />
    <button onClick={() => addPost(newpost)}>ADD POST</button><br/>
    <Link to="/home">Return to home</Link>
    </div>
  )
}

export default CreatePost