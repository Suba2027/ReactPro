import React from 'react'
import Profile from '../components/Profile.jsx'
import State from '../hooks/State.jsx'
import Parent from '../components/Parent.jsx'
import Form from '../hooks/Form.jsx'

const Home = () => {
  return (
    <div>
      <Form/>
      <Parent/>
       <State />
      <Profile name="Suba" age={20}
      skills={["JavaScript", "React", "Node.js","Html","css","Java"]}/>
    </div>
  )
}

export default Home