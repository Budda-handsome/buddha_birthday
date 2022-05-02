import './App.css';
import React from 'react';
import {Link} from "react-router-dom";

function Message() {
  return (

    <div className ="App">

      <div className='Appblock' id='box2'>
          <h2>보낼 메시지</h2>
          <input placeholder='메시지를 입력하세요' className='input1'>
          </input>
         <div className='Appblock' id='box1'>
         <h2>닉네임</h2>
         <input placeholder='자신의 닉네임을 입력하세요'></input>
        
         </div>
         <div className='Appblock2'>
         <button className='startbutton'>
             <Link to='/Year' style={{color: "white" , textDecoration: "none" }}>
             다음으로
             </Link>
             </button>
          </div>
      </div> 
    </div>
  );
  }
  
  export default Message;
  