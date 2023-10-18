import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Home from "./pages/Home";
import Index from "./pages/Index";
import Show from "./pages/Show";
import New from "./pages/New";
import Edit from "./pages/Edit";

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
            </Routes>
          </main>
        </Router>
       </div>
    </>
  )
}

export default App
