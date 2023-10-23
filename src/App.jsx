import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Home from "../src/Pages/Home";
import Index from "../src/Pages/Index";
import Show from "../src/Pages/Show";
import New from "../src/Pages/New";
import Edit from "../src/Pages/Edit";
import FourOFour from "../src/Pages/FourOFour";

import NavBar from "./Components/NavBar";

function App() {
  
  return (
    <>
      <div className="App">
        <Router>
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/foods" element={<Index />}/>
              
              <Route path="/foods/new" element={<New/>} />
              <Route path="/foods/:index" element={<Show />} />
              <Route path="/foods/:index/edit" element={<Edit />} />
              <Route path="*" element={<FourOFour />} />
            </Routes>
          </main>
        </Router>
       </div>
    </>
  )
}

export default App
