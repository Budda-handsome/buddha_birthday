import React,{useState} from "react";
import axios from "axios";

export default function SignUp(){
  const [data, setData] = useState(0);
  const onClick = () => {
    axios.get("https://5d2b7664-a30d-4765-8525-f06a99a0648b.mock.pstmn.io/test")
    .then((response) => {
      console.log(response.data);
    });
  };


 return(
<div id="tab-1" className="tab-content">
    <form action="" method="get" className="form-signup">
      <div className="form-signup">
        <label htmlFor="name">닉네임 </label>
        <input type="text" name="name" id="name" placeholder="10자 이하" required/>
        </div>
      <div className="form-signup">
        <label htmlFor="id">아이디 </label>
        <input type="text" name="id" id="id" placeholder="영문 소문자, 숫자 4~20자" required/>
        </div>
      <div className="form-signup">
        <label htmlFor="password">비밀번호 </label>
        <input type="password" name="password" id="password" placeholder="입력해주세요" required/>
      </div>
      <div className="form-signup">
        <label htmlFor="passwordcheck">비밀번호 확인 </label>
        <input type="text" name="passwordcheck" id="passwordcheck" placeholder="한번 더 입력해주세요" required/>
        </div>

    </form>
    <div className="form-ex">
    <button type="submit" onClick={onClick}>연등 만들기</button>
  </div>
  </div>
 )
}