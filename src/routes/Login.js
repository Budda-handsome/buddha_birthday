import './App.css';
import React from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';


  function Login() {

    const [flip, setflip] = React.useState(false);
    const onFlip = () => setflip((current) => !current);

    const [name, setname] = React.useState("");
    const [id, setid] = React.useState("");
    const [password, setpassword] = React.useState("");

    const changename = (event) => {
      setname(event.target.value);
    }

    const changeid = (event) => {
      setid(event.target.value);
    }

    const changepassword = (event) => {
      setpassword(event.target.value);
    }

    const [data, setData] = React.useState(null);
    const onClick = () =>{
      axios.get("https://27bbdc7e-efce-42aa-a1da-36be15bdf9e2.mock.pstmn.io").then((response) =>
      {
        setData(response.data);
      })
    }

    const options = {
      url: "https://27bbdc7e-efce-42aa-a1da-36be15bdf9e2.mock.pstmn.io",
      method : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data : {
        "id" : id,
        "name": name,
        "password": password
      }
    }

    const onPush = () => {
      axios(options).then(response =>{
        setData(response.status);
      });
    }

    
 

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
            <input  placeholder="닉네임" name="name" onChange={changename}></input>
            <h3>아이디를 입력하세요</h3>
            <input  placeholder="아이디" name="id" onChange={changeid}></input>
            <h3>비밀번호를 입력하세요</h3>
            <input  type="password" placeholder="비밀번호" name="password" onChange={changepassword}></input>
            <input type="password" placeholder="비밀번호 확인"></input>
            </div>
            <button className='startbutton' onClick={onClick}>데이터 받기</button>
            <button className='startbutton' onClick={onPush}>데이터 넣기</button>

          </div> 
          {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}

        </div>
      );
    }
  }
  
  export default Login;
  