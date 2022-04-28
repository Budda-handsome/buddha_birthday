import './App.css';
import React from 'react';
import {Link} from "react-router-dom";

  function Login() {

    const [flip, setflip] = React.useState(false);
    const onFlip = () => setflip((current) => !current);


    if (flip == true){
      return (
        <div className ="App">
          <div className='Appinblock' id='box2'>
            <h3 className="hometext">
              <Link to="/" style={{color: "black" , textDecoration: "none" }}>
                처음으로
              </Link>
             <img src="./home.png">
            </img></h3>
             <h1> 등불을 밝혀죠 </h1>
             <h2> 당신의 등불을 밝혀주세요</h2>
            <div className='Appblock' id='box1'>
             <button onClick={onFlip} className='lobuttoff'>회원가입</button>
             <button onClick={onFlip} className='lobutton'>로그인</button>
            <h3>아이디를 입력하세요</h3>
            <input placeholder="아이디" name='checkid'></input>
            <h3>비밀번호를 입력하세요</h3>
            <input type="password" placeholder="비밀번호" name='checkpw'></input>
            </div>
            <button className='startbutton' > <Link to ="/Home2" style={{color: "white" , textDecoration: "none" }}>
            로그인 하기</Link></button>
          </div> 
        </div>
      );

    }else{
      return (
        <div className ="App">
          <div className='Appinblock' id='box2'>
            <h3 className="hometext">
              <Link to="/" style={{color: "black" , textDecoration: "none" }}>
                처음으로
              </Link>
             <img src="./home.png">
            </img></h3>           
             <h1> 등불을 밝혀죠 </h1>
             <h2> 당신의 등불을 밝혀주세요</h2>
            <div className='Appblock' id='box1'>
             <button onClick={onFlip} className='lobutton'>회원가입</button>
             <button onClick={onFlip} className='lobuttoff'>로그인</button>
            <h3>닉네임을 입력하세요</h3>
            <input  placeholder="닉네임"></input>
            <h3>아이디를 입력하세요</h3>
            <input  placeholder="아이디"></input>
            <h3>비밀번호를 입력하세요</h3>
            <input  type="password" placeholder="비밀번호"></input>
            <input type="password" placeholder="비밀번호 확인"></input>
            </div>
            <button className='startbutton'>아이디 만들기</button>
          </div> 
        </div>
      );
    }
  }
  
  export default Login;
  