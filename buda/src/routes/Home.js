import './App.css';
import {Link} from "react-router-dom";

  function Home() {
    return (
      <div className ="App">
        <div className='Appblock2' id='box2'>
           <h1> 등불을 밝혀죠 </h1>
           <h2> 당신의 등불을 밝혀주세요</h2>
           <div className='Appblock' id='box1'>
           <img src= "./image 1.png" alt ='buda'></img>
           </div>
           <div className='Appblock2' >
           <button className='startbutton'>
                <Link to="/login" style={{color: "white" , textDecoration: "none" }}> 연등 만들러 가기</Link>
               </button>
            </div>
        </div> 
      </div>
    );
  }
  
export default Home;
  