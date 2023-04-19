import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';

//Routes
import Login from "./pages/Login";
import Layout from "./component/Layout";

//React Router
import { Route, Switch } from "react-router-dom";

function App() {
  const history = useHistory();

  useEffect(() => {
    history.push('/Login');
  }, [history]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route path="/" component={Layout} />
      </Switch>
    </div>
  );
}

export default App;
