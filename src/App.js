import Login from "./components/login";
import Welcome from "./components/welcome";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import SignUp from "./components/signUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/register" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
