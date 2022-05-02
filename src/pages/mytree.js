import React, {useState,useRef} from 'react';
import tample from '../img/tample.svg';
import style from '../changeback.css';
import axios from "axios";
import { resolvePath } from 'react-router-dom';



export default function Mytree(){
   
    const copyTextUrl = ()=>{
        const url = window.location.href;
    
        navigator.clipboard.writeText(url).then(() => {
            alert("링크를 복사했습니다.");
        });

    }
    const [values, setValues] = useState({
        name: "",
        messageCount: 0,
      })
    return(
        <div>
            <h1>{values.name} 님에게</h1>
            <h1>{values.messageCount} 개의 메세지가 전달됐어요!</h1>
            <img src={tample} className="tample" alt="tampleimg"/>
            <button onClick={copyTextUrl}>
                트리 링크 전달하기
            </button>
        </div>
    
    )

}