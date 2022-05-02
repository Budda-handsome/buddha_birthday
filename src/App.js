
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import React from 'react';
import axios from 'axios';
import {BrowserRouter ,Routes, Route} from "react-router-dom"


function App() {
  axios.defaults.baseURL = 'http://localhost:8080' // 내 서버
  return (

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/signup" element={<SignUp/>} ></Route>
      </Routes>
      
    </BrowserRouter>
    
   
  );
}

export default App;
