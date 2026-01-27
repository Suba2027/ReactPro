import React from 'react'
import { useState } from 'react'
const State = () => {
    const [count,setCount] = useState(0);
  return (
    <div>
      <h1>useState example</h1>
        {/* thumbsup for increase and thumbsdown for decrease */}
      <h2>Count:{count}</h2>
      <button onClick={()=>setCount(prev=>prev+1)}>👍</button>
      <button onClick={()=>setCount(prev=>prev-1)}>👎</button>
    </div>
  )
}

export default State