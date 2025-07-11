import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
