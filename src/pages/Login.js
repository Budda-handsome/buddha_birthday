import React, {useState, Fragment} from 'react';
import axios from "axios";

export default function Login(){
    const [values, setValues] = useState({
        id: '',
        password: '',
      })
    
    
      const handleChangeForm = (e) => {
        setValues({
          ...values,
          [e.target.name]: e.target.name
        })
      }
    
      const onClickLogin = (e) =>{
        let url = '/api/login'
        let User = {
          'id': values.id,
          'password': values.password
        }
    
      var config={
        header:{
          'Content-Type' : 'application/json',
        }
      }
      axios.post(url, User, config, {withCredentials:true})
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
        document.location.href = "/"
      }).catch()}
        
    return (
        <div id="tab-2" className="tab-content">
            <form action="" method="get" className="form-login">
              <div className="form-login">
                <label >아이디 </label>
                <input type="text" name="id" value={values.id} onChange={handleChangeForm}/>
                </div>
              <div className="form-login">
                <label >비밀번호 </label>
                <input type="password" name="password" value={values.password} onChange={handleChangeForm} />
                </div>
            </form>
            <div className="form-ex">
            <button type="submit" onClick={onClickLogin}>로그인 하기</button>
          </div>
      </div>
    );

}