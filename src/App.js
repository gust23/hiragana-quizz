import { React } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GameContainer from './Game/game-container';
import Home from './Home/Home';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route path='/game' component={GameContainer} />
            <Route path='/' exact={true} component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
