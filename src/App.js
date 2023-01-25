
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Cocktaits from './components/Cocktaits';

function App() {
  return (
    
    <div className="App">
      <Navbar />
     
      <Routes>
				<Route path="/home" element={<Home />} />
        <Route path="/for" element={< Cocktaits/>} />
        </Routes>
      
    </div>
  );
}

export default App;
