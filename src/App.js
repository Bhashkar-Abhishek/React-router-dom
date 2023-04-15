import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./component/Navbar";
import { Home } from "./component/Home";
import { Contact } from "./component/New";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
         
         
          <Route path="/contact" element={<Contact />} />



          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App