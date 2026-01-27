import React from 'react'
const Child = ({send}) => {
    //whenever send parameters use arrow function 
  return (
    <div>
        <br />
        <button onClick={()=>send("hello from child")}>
            send Data 
        </button>
    </div>
  )
}

export default Child