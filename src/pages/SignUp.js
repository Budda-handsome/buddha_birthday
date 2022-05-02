import React from "react";

export default function SignUp(){
 return(
<div id="tab-1" className="tab-content">
            <form action="" method="get" className="form-signup">
              <div className="form-signup">
                <label htmlFor="names">닉네임 </label>
                <input type="text" name="names" id="names" placeholder="10자 이하" required/>
                </div>
              <div className="form-signup">
                <label htmlFor="ids">아이디 </label>
                <input type="text" name="ids" id="ids" placeholder="영문 소문자, 숫자 4~20자" required/>
                </div>
              <div className="form-signup">
                <label htmlFor="passwords">비밀번호 </label>
                <input type="password" name="passwords" id="passwords" placeholder="입력해주세요" required/>
              </div>
              <div className="form-signup">
                <label htmlFor="passwordcheck">비밀번호 확인 </label>
                <input type="text" name="passwordcheck" id="passwordcheck" placeholder="한번 더 입력해주세요" required/>
                </div>

            </form>
            <div className="form-ex">
            <button type="submit">연등 만들기</button>
          </div>
          </div>
 )
}