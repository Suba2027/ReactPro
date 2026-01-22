import Home from '../pages/Home'
import React, {useEffect,useState} from 'react'
const Effect = () => {



const[users,setUsers]= useState([])
 useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log("Error fetching users:", error));
  }, []); // dependency array run only once

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
};


export default Effect

//       const[count,setCount]= useState(0)
//       useEffect(()=>{
// console.log("component mount",count);
// return()=>{
//     console.log("Component unmounted");
// }
//  })

//   return (
//         <div>
//         <h1>Count:{count}</h1>
//         <button onClick={()=>setCount(prev=>prev+1)}>Increase</button>  
//    </div>
    
//   )