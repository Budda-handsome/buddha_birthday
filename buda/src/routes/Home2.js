import './App.css';
import React from 'react';
import {Link} from "react-router-dom";

function Home2() {
  return (
    <div className ="App">
      <div className='Appblock' id='box2'>
       <h2 > 철수님에게 메세지가</h2>
       <h2 > 51개가 도착했습니다</h2>
         <div className='Appblock' id='box1'>
         <img src= "./image 1.png" alt ='buda'></img>
         </div>
         <div className='Appblock2'>
         <button className='startbutton'>
           <Link to= "/Message" style={{color: "white" , textDecoration: "none" }}>
             내 연등 링크 보내기
           </Link>
             </button>
          </div>
      </div> 
    </div>
   );
  }
  
  export default Home2;
  