import React from 'react'
import Profile from '../components/Profile.jsx'
import State from '../hooks/State.jsx'
import Parent from '../components/Parent.jsx'
import Form from '../hooks/Form.jsx'
import { userContext } from '../App.jsx'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Home = () => {
  const [user,setUser]=useState("abcd")
  return (
  
    <div>
        <Link to={'/form'}> Form </Link> <br />
        <Link to={'/state'}> UseState Example </Link> <br />
        <Link to={'/reducer'}> UseReducer Example </Link> <br />
        <userContext.Provider value={user}>
         <Profile name="Suba" age={20}
      skills={["JavaScript", "React", "Node.js","Html","css","Java"]}/>
            </userContext.Provider>
      {/* <Form/> */}
      <Parent/>
       {/* <State /> */}
     
    </div>
  )
}

export default Home