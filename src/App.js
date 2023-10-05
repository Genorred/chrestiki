import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './pages/login/Login';
import AppRouter from "./AppRouter.jsx";
import Navbar from "./components/UI/navbar/Navbar";
import { userInfo } from "./context";
import React, {useState} from "react";

function App() {
  return (
 <userInfo.Provider value={{
 }}>
    <BrowserRouter>
    <Navbar/>
      <AppRouter/>
    </BrowserRouter>
 </userInfo.Provider>
  );
}

export default App;
