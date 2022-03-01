
// import React from 'react'

// function UserData() {
//     const users = {
//         names: ['Ram', 'Shyam', 'Laxman'],
//         passwords: ['123','456','789']
//       }
//   return (
//     <div>UserData</div>
//   );
// }

// export default UserData
// export const users = {
//     names: ['Ram', 'Shyam', 'Laxman'],
//     passwords: ['123','456','789']
//   }

//   export default UserData
export var users = {
    names: ['Ram', 'Shyam', 'Laxman'],
    passwords: ['123','456','789']
  }

export var login = {
    status: false,
    name: '',
    password: ''
  }

export var post = (username, post, comments, postcode) => {
  const user = username;
  const postsave = post;
  const postcodesave = postcode;
  const commentsave = comments;
  return {
    user:user,
    postsave:postsave,
    postcodesave:postcodesave,
    commentsave:commentsave
  }
}

