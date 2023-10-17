import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Home from "./pages/Home";
import Index from "./pages/Index";
import Show from "./pages/Show";

function App() {
  
  return (
    <>
      <div className="App">
        <Router>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/foods" element={<Index />}/>
              <Route path="/food/:index" element={<Show />} />
            </Routes>
          </main>
        </Router>
       </div>
    </>
  )
}

export default App
