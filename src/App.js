import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import MyBooks from "./components/MyBooks";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/MyBooks" element={<MyBooks />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
