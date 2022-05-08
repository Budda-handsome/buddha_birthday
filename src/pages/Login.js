import React, {useState, Fragment} from 'react';
import axios from "axios";

export default function Login(){
    const [values, setValues] = useState({
        id: "",
        password: ""
      })
    
    
      const handleChangeForm = (e) => { 
        const {name, value} = e.target;
        setValues({
          ...values,
          [name]: value
        });
      };
    
      const onClickLogin = (e) =>{
        let url = 'https://775913ba-646a-4085-8f55-ee220e8101c5.mock.pstmn.io/user/first'
        let User = {
          'id': values.id,
          'password': values.password
        }
        
    
      var config={

        header:{
          'Content-Type' : 'application/json',
        }
      }

      const response = axios.post(url, User, config, {withCredentials:true})
      .then(res => {
        console.log(res.data)
        if(res.data.id === undefined){
          // id 일치하지 x
       console.log('======================',res.data.msg)
            alert('입력하신 id 가 일치하지 않습니다.')
        } else if(res.data.id === null){
            // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
            console.log('======================','입력하신 비밀번호 가 일치하지 않습니다.')
            alert('입력하신 비밀번호 가 일치하지 않습니다.')
        } else if(res.data.id === values.id) {
            // id, pw 모두 일치 userId = userId1, msg = undefined
            console.log('======================','로그인 성공')
            sessionStorage.setItem('id', res.data.id)
            sessionStorage.setItem('token', res.data.token)
            sessionStorage.setItem('userId', res.data.userId)
        }
      }).catch()
      console.log(response);}
        
    return (
        <div id="tab-2" className="tab-content">
            <form className="form-login" onSubmit={onClickLogin}>
              <div className="form-login">
                <label >아이디 </label>
                <input type="text" name="id" onChange={handleChangeForm}/>
                </div>
              <div className="form-login">
                <label >비밀번호 </label>
                <input type="password" name="password" onChange={handleChangeForm} />
              </div>
            </form>
            <button type="submit" onClick={onClickLogin}>로그인 하기</button>
        </div>
    );

}