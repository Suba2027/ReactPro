import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import User from './components/User.jsx'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"

 import Contact from "./pages/Contact.jsx"
// import Services from "./pages/Services.jsx"
import State from './Hooks/state.jsx'

import Effect from './Hooks/Effect.jsx'
const App = () => {
  return (
      <>
    {/* <User name ="Subalakshmi R" department="ECE" skills={['HTML','CSS','JAVASCRIPT','JAVA']}/> */}
    <Routes>
      <Route path= "/" Component={Home}/>
      <Route path ="/about" Component={About}/>
       <Route path="/contact" Component={Contact}/>
      {/* <Route path ="/services" Component={Services}/>;         */}
    
      <Route path="/state" Component={State}/>
            
            
      <Route path="/effect" Component={Effect}/>     
            
             {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/state" element={<State />} /> */}

    </Routes>
      </>
  )
}

export default App