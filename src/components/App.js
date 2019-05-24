import React from 'react'
//because of we make history we use plain router
import { Router, Route , Switch } from 'react-router-dom';

import history from '../history'; //for prog nav
import Header from './header/Header';

import Landing from './pages/Landing';
import About from './pages/About';
import Blog from './pages/Blog';
import MyPath from './pages/MyPath';

//switch help show one route at time
const App = () => {
  return (
    <div className="container">
      <Router history={history}>
        <div>
          <Header />
          <Switch> 
            <Route path="/" exact component={Landing}/>
            <Route path="/pages/about" exact component={About}/>
            <Route path="/pages/blog" exact component={Blog}/>
            <Route path="/pages/mypath" exact component={MyPath}/>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;