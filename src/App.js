import { React } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Game from './Game/Game';
import Home from './Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route path='/game' component={Game} />
          <Route path='/' exact={true} component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
