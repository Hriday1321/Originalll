import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Make from './components/Make'
import Guess from './components/Guess'

function App() {
  const [words, setWords] = React.useState('first')
  let props = {
    words: words,
    set: setWords
  }
  return (
      <Routes>
        <Route index element={<Home words = {words}/>} />
        <Route path="/make" element={<Make {...props}/>} />
        <Route path="/guess" element={<Guess words = {words} />} />
      </Routes>  
      );
}

export default App;
