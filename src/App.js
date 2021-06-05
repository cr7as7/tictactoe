import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './index.css';
import Game from './components/Game';
import Login from './components/Login';

function App() {

  return (
    <div className="Tic-Tac-toe">
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            component={Login}
            exact
          />
          <Route
            path="/game"
            component={Game}
            exact
          />
          <Redirect
            to="/"
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
