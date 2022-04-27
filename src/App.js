import styles from "./App.moudle.css";
import styles2 from "./styles.css";
import logo from './buddha.png';

import {BrowserRouter as Router,Routes, Route, useNavigate, Link} from "react-router-dom"
import React, { useState } from "react";
import { render } from "@testing-library/react";


function App() {
  return (

    <Router>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
    </Router>
    
   
  );
}

const Title = () =><Link to="/"><h2 id="title" > 
등불을 밝혀죠!
</h2></Link>

function Home(){
  
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup")
  };
  return(
    <div>
      
      <header className="head">
      <Title/>
      <p>등불을 밝히고 마음을 나누세요</p>
    </header>
      <img src={logo} className="app-logo" alt="logo"></img>
     <button onClick={handleClick} >시작하기</button>
    </div>

  )
}



function SignUp(){
  const [count, setCount] = useState(0);
  console.log(count);
  

  const clickHandler = (id) => {
    setCount(id);
  };

  const obj = {
    0: <>
    <div id="tab-1" className="tab-content">
            <form action="" method="get" className="form-signup">
              <div className="form-signup">
                <label for="name">닉네임 </label>
                <input type="text" name="name" id="name" placeholder="10자 이하" required/>
                </div>
              <div className="form-signup">
                <label for="id">아이디 </label>
                <input type="text" name="id" id="id" placeholder="영문 소문자, 숫자 4~20자" required/>
                </div>
              <div className="form-signup">
                <label for="password">비밀번호 </label>
                <input type="password" name="password" id="password" placeholder="입력해주세요" required/>
              </div>
              <div className="form-signup">
                <label for="passwordcheck">비밀번호 확인 </label>
                <input type="text" name="passwordcheck" id="passwordcheck" placeholder="한번 더 입력해주세요" required/>
                </div>

            </form>
          </div>
    </>,
    1:<>
     <div id="tab-2" className="tab-content">
            <form action="" method="get" className="form-login">
              <div className="form-login">
                <label for="id">아이디 </label>
                <input type="text" name="id" id="id" required/>
                </div>
              <div className="form-login">
                <label for="password">비밀번호 </label>
                <input type="password" name="password" id="password" required/>
                </div>
            </form>
      </div>
    </>
  }
  
 
    return (
      <div className="wrapper">
      <header className="head">
      <Title/>
        <p>등불을 밝히고 마음을 나누세요</p>
      </header>

          <div className="container" style= {styles2}>
            <ul className="tabs" >
              <li onClick={() => clickHandler(0)} className="tab-link " data-tab="tab-1">
                <input type="radio" id="signup" name="select"></input>
                <label for="signup">회원가입</label>
                </li>
              <li onClick={() => clickHandler(1)}className="tab-link" data-tab="tab-2">
                  <input type="radio" id="signin" name="select"></input>
                  <label for="signin">로그인</label>
              
              </li>
              
            </ul>

          {/* this.state.activeId */}
          <div className="contents">{obj[count]}</div>
          
          </div>  
          <div className="form-ex">
            <button type="submit">연등 만들기</button>
          </div>
          </div>
      );
  }

export default App;
