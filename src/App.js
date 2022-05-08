
import Home from "./pages/Home";
import React from 'react';
import axios from 'axios';
import {BrowserRouter ,Routes, Route} from "react-router-dom"
import TapMenu from "./pages/TapMenu";
import MyTree from "./pages/Mytree";
import Message from "./pages/Message"

function App() {
  
  //axios.defaults.baseURL = 'http://localhost:8080' // 내 서버
  // axios.defaults.baseURL = 'https://reqres.in/api/login' // 연습
  return (

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/tapmenu" element={<TapMenu/>} ></Route>
      <Route path="/mytree" element={<MyTree/>}></Route>
      <Route path="/message" element={<Message/>}></Route>
      </Routes>
      
    </BrowserRouter>
    
   
  );
}

export default App;
