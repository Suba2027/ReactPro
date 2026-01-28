// import React from 'react'
// import { useParams } from 'react-router-dom'
// const ProductDetails = () => {
//         const products=[
//         {id:1,name:"Laptop",price:"30000",description:'Acer Laptop is 10th gen'},
//         {id:2,name:"Mobile",price:"20000",description:'16gb ram with calling feature'},
//         {id:3,name:"Mouse",price:"300",description:'gaming mouse with rgb light'},
//         {id:4,name:"Keyboard",price:"2000",description:'keyboard with all keys'},
//     ]
   
//         const {id}=useParams()  
//         const product= products.find((p)=>p.id===Number(id)) 
//   return (
//     <div>
//         <h1>Product Details</h1>
//         <h2>{product.name}</h2>
//         <p>Price:{product.price}</p>
//         <p>{product.description}</p>
//     </div>
    
//   )
// }

// export default ProductDetails

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
        const [product,setPoduct]=useState({})
        const {id}=useParams() 
        useEffect(()=>{
          fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            // .then(data => console.log(data))
            .then((data) => setPoduct(data))

        },[]) 
      
  return (
    <div>
        <h1>Product Details</h1>
        <h2>{product.title}</h2>
        <p>Price:{product.price}</p>
        <p>{product.description}</p>
        <p>{product.category}</p>

    </div>
    
  )
}

export default ProductDetails