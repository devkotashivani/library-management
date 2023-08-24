import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/SignUp";
import Home from "./pages/home/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./pages/dashboard/Dashboard";
import Client from "./pages/clients/Client";
import Buks from "./pages/books/Buks";
import Historys from "./pages/history/Historys";


function App() {
  return (
    <div>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Login/>} />
        
        {/* Private routes   */}

        <Route path="/dashboard" element={<Dashboard/>} />
        
        <Route path="/signup" element={<Signup/>} />
        <Route path="/books" element={<Buks/>} />
        <Route path="/history" element={<Historys/>} />
        <Route path="/client" element={<Client/>} />
        <Route path="*" element={<Home/>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;