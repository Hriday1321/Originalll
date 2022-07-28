import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
