import "./App.css";

import { Navbar } from "./component/Navbar";
import { Home } from "./component/Home";
import { Edit } from "./component/Edit";
import { Delete } from "./component/Delete";
import { Create } from "./component/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route />
          <Route path="/home" element={<Home/>} />

          <Route path="/Edit" element={<Edit/>} />
          <Route path="/delete" element={<Delete/>}/>
          <Route path="/create"  element={<Create/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
