import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/SignUp";
import Home from "./pages/home/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;