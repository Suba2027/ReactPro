import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
const State = () => {
    const [count, setCount] = useState(0);
    const [like, setLike]=useState(0);
    useEffect(() => {
        // This will run once when the component mounts
        console.log('from useEffect');
    },[like])
    //thumbsup button to increment and thumbsdown button to decrement the count value 
  return (
    <div>
      <h2>UseState Example</h2>
      <h2>Count: {count}</h2>
      <button onClick={()=>setCount(prev=>prev+1)}> Increment</button>
       <button onClick={()=>setCount(prev=>prev-1)}> Decrement</button>
      <h3>LIKE:{like}</h3>
      <button onClick={()=>setLike(like+1)}> Like</button>
    </div>
  );
};

export default State;