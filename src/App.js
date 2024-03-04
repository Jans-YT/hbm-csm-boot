import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './page/Login';
import Home from './page/Home';
import Main from './page/main';
import About from './page/aboutp';
import Lod from './page/settings' ;





function App() {
  return (  
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/main" element={<Main />} />
      <Route path="/About" element={<About />} />
      <Route path="/Lod" element={<Lod />} />

      
  
    </Routes>
    </BrowserRouter>
  );
}

export default App;
