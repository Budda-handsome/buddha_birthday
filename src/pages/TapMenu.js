import styles from "../styles.css";
import styled from "styled-components";
import React, {useState, Fragment} from 'react';
import Header from "../layout/Header";

import SignUp from "./SignUp";
import Login from "./Login";
function TapMenu(){
  const [count, setCount] = useState(0);
  const clickHandler = (id) => {
    setCount(id);
  };
  
  const obj = {
    0: <>
    <SignUp/>
    </>,
    1:<>
     <Login/>
    </>
  }
  
 
  const AdSlideLI = styled.li`
    color: ${props => (props.active ? `#DC87A4` : `#fff`)};
    background-color: ${props => (props.active ?  `#fff`: `#DC87A4`)};`;

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
          </div>
          </Fragment>
      );
    }
    export default TapMenu;