import React from 'react'
import { Routes, Route } from "react-router-dom"
import Make from './components/Make/Make'
import Id from './components/Guess/Id'

function App() {
  return (
      <Routes>
        <Route index element={<Make />} />
        <Route path="/make" element={<Make />} />
        <Route path="/guess" element={<Id />} />
      </Routes>  
      );
}

export default App;
