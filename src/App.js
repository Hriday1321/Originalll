import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Make from './components/Make'
import Guess from './components/Guess'

function App() {
  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="/make" element={<Make />} />
        <Route path="/guess" element={<Guess />} />
      </Routes>  
      );
}

export default App;
