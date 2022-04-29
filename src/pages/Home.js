
import logo from '../img/tample.svg';
import SignUp from '../pages/SignUp';
import Header from '../layout/Header';

import {Link, useNavigate} from "react-router-dom"
import React, { Fragment } from "react";

export default function Home(){
  
  // let navigate = useNavigate();
  // const handleClick = () => navigate(SignUp);
  return(
    <Fragment>
    <div> 
        <Header/>
      
      <img src={logo} className="app-logo" alt="logo"></img>

      <Link to="/signup">
      <button>시작하기</button>
      </Link>
     
    </div>
    </Fragment>
    

  )
}


