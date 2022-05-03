import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Home2 from "./routes/Home2";
import Message from "./routes/Message";
import Year from "./routes/Year";


function App() {

  return (
  <Router>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      
      <Route path= "/Home2">
        <Home2 />
      </Route>

      <Route path= "/Message">
        <Message />
      </Route>

      <Route path= "/Year">
        <Year />
      </Route>

      <Route path="/">
        <Home />
      </Route>

      

    </Switch>
  </Router>);
}

export default App;
