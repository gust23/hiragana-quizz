import './App.css';
import hiraganaArray from './data/hiraganaArray';
import { React, useState, useEffect, useRef } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Game from './Game/Game';
import Home from './Home/Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/game' exact render={(props) => <Game />} />
        </Switch>
        <Switch>
          <Route path='/' exact render={(props) => <Home />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
