import React from 'react'
import { Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Service from './pages/Service.jsx'
import Contact from './pages/Contact.jsx' 
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Reducer from './hooks/Reducer.jsx' 
import { createContext } from 'react'
import State from './hooks/State.jsx'
import Form from './hooks/Form.jsx'

export const userContext=createContext()
const App = () => {
  return (
    //only one parent tag can be there inside that we can have multiple divs and tags these tags are fragments
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<ProductDetails/>}/>
      <Route path="/reducer" element={<Reducer/>}/>
      <Route path="/state" element={<State/>}/>
      <Route path="/form" element={<Form/>}/>

    </Routes>
    </>
  )
}

export default App