import React from 'react';
import Navbar from './Navbar.js';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route exact path='/'  element={<Home />}/>
        <Route exact path='/about'  element={<About />}/>
        <Route exact path='/contact'  element={<Contact />}/>
      </Routes>
      <Footer />
     </BrowserRouter>
  )
}

export default App;
