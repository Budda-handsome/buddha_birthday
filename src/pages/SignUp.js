import styles from "../styles.css";
import styled from "styled-components";
import React, {useState, Fragment} from 'react';
import Header from "../layout/Header"

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
          </div>
    </>,
    1:<>
     <div id="tab-2" className="tab-content">
            <form action="" method="get" className="form-login">
              <div className="form-login">
                <label htmlFor="id">아이디 </label>
                <input type="text" name="id" id="id" required/>
                </div>
              <div className="form-login">
                <label htmlFor="password">비밀번호 </label>
                <input type="password" name="password" id="password" required/>
                </div>
            </form>
      </div>
    </>
  }
  
 
  const AdSlideLI = styled.li`
    color: ${props => (props.active ? `#634646` : `#fff`)};
    background-color: ${props => (props.active ?  `#fff`: `#634646`)};
    
  `;
    return (
      <Fragment>
      <div className="wrapper">
      <Header></Header>
        

          <div className="container">
            <ul className="tabs" >
              <AdSlideLI active={count === 0} onClick={() => clickHandler(0)} className="tab-link ">
                <span>회원가입</span>
                </AdSlideLI>
                <AdSlideLI active={count=== 1} onClick={() => clickHandler(1)}className="tab-link">
                  <span>로그인</span>
              </AdSlideLI>
              
            </ul>

          {/* this.state.activeId */}
          <div className="contents">{obj[count]}</div>
          
          </div>  
          <div className="form-ex">
            <button type="submit">연등 만들기</button>
          </div>
          </div>
          </Fragment>
      );
  }
    export default SignUp;