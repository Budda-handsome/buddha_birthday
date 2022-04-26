import styles from "./App.moudle.css";
import logo from './buddha.png';
import styles2 from "./styles2.css";
import {BrowserRouter as Router,Routes, Route, useNavigate, Link} from "react-router-dom"
function App() {
  return (

    <Router>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
    </Router>
    
   
  );
}

function Home(){
  
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup")
  };
  return(
    <div>
      <header className="head">
      <Link to="/">
      <h2>등불을 밝혀죠!</h2>
      </Link>
      <p>등불을 밝히고 마음을 나누세요</p>
    </header>
      <img src={logo} className="app-logo" alt="logo"></img>
     <button onClick={handleClick} >시작하기</button>
    </div>

  )
}

function MoveTap(){

}

function SignUp(){
  return (
    <><header className="head">
      <Link to="/">
      <h2>등불을 밝혀죠!</h2>
      </Link>
      <p>등불을 밝히고 마음을 나누세요</p>
    </header><main>

        <div class="container" style= {styles2}>
          <ul class="tabs">
            <li class="tab-link current" data-tab="tab-1">회원가입</li>
            <li class="tab-link" data-tab="tab-2">로그인</li>
          </ul>

          <div id="tab-1" class="tab-content current">
            <form action="" method="get" class="form-signup">
              <div class="form-signup">
                <label for="name">닉네임 </label>
                <input type="text" name="name" id="name" placeholder="10자 이하" required/>
                </div>
              <div class="form-signup">
                <label for="id">아이디 </label>
                <input type="text" name="id" id="id" placeholder="영문 소문자, 숫자 4~20자" required/>
                </div>
              <div class="form-signup">
                <label for="password">비밀번호 </label>
                <input type="password" name="password" id="password" placeholder="입력해주세요" required/>
              </div>
              <div class="form-signup">
                <label for="passwordcheck">비밀번호 확인 </label>
                <input type="text" name="passwordcheck" id="passwordcheck" placeholder="한번 더 입력해주세요" required/>
                </div>

            </form>
          </div>

          <div id="tab-2" class="tab-content">
            <form action="" method="get" class="form-login">
              <div class="form-login">
                <label for="id">아이디 </label>
                <input type="text" name="id" id="id" required/>
                </div>
              <div class="form-login">
                <label for="password">비밀번호 </label>
                <input type="password" name="password" id="password" required/>
                </div>
            </form>
          </div>

        </div>
        <div class="form-ex">
          <button type="submit">연등 만들기</button>
        </div>

      </main></>
  );
}

export default App;
