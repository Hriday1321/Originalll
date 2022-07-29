import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home.js'

function App() {
  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<Home />} />
      </Routes>  
      );
}

export default App;
