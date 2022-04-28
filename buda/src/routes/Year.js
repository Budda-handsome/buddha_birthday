import './App.css';
import React from 'react';
import {Link} from "react-router-dom";

function Year() {
  return (

    <div className ="App">

      <div className='Appblock2' id='box2'>
          <h2>연등 모양을 고르세요</h2>
          <img src="./연등1.PNG"></img>
          <img src="./연등2.PNG"></img>
          <img src="./연등3.PNG"></img>
         <div className='Appblock' id='box1'>

         </div>
         <div className='Appblock2'>
         <button className='startbutton'>
             보내기
             </button>
          </div>
      </div> 
    </div>
  );
  }
  
  export default Year;
  