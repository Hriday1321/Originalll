import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Make from './components/Make'
import Id from './components/Id'

function App() {
  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="/make" element={<Make />} />
        <Route path="/guess" element={<Id />} />
      </Routes>  
      );
}

export default App;
