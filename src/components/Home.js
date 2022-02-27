import React from 'react'
import {login} from   './UserData'

function Home() {
  return (
    <div>Home
        <br/>
    {`Welcome ${login.name}`}
    </div>
  );
}

export default Home