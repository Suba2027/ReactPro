import React from 'react'
import { Link } from 'react-router-dom'
const Products = () => {
    const products=[
        {id:1,name:"Laptop",price:"30000"},
        {id:2,name:"Mobile",price:"20000"},
        {id:3,name:"Mouse",price:"300"},
        {id:4,name:"Keyboard",price:"2000"},
    ]
  return (
    <div>
        <h1>Products</h1>
        {
            products.map((product)=>(
            <div key={product.id}>
                <h4>{product.name}</h4>
                <h5>{product.price}</h5>
                <Link to={`/products/${product.id}`}>View Details</Link>
            </div>    
            ))}
    </div>
  )
}

export default Products