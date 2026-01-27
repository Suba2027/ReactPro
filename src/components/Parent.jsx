import React from 'react'
import Child from './Child.jsx'
const Parent = () => {
    const getData=(data)=>{
        console.log("Data received from child",data); 
    }
  return (
    <div>
        <Child send={getData}/>
    </div>
  )
}

export default Parent