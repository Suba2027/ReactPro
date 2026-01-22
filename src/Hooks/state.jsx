//import React from 'react'
import React, { useState } from 'react'
import Home from '../pages/Home'



const state = () => {
  const [count,setCount]= useState(0)
  return (
    <div>
      <h1>useState example</h1>
      <h2>Count:{count}</h2>
      <button onClick={()=>setCount(prev=>prev+1)}>Increase</button>
    </div>

  )
}

export default state
