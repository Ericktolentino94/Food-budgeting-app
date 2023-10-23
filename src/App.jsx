import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./pages/New";
import Edit from "./pages/Edit";
import FourOFour from "./pages/FourOFour";

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
