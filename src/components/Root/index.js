import React from 'react';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Login, Registro, Feed, Top, Biblioteca } from '../../components';
import App from '../../app/index';
import MusicPlayer from '../MusicPlayer';
import NavBar from '../NavBar';
import Profile from "../Profile";

import 'bootstrap/dist/css/bootstrap.min.css';
import * as selectors from '../../reducers';


const Root = ({ store, isLoggedIn }) => (
  <Provider store={store}>
    <Router>
      {
        isLoggedIn ? <NavBar /> : <div/>
      }
      {
        isLoggedIn ? <MusicPlayer /> : <div/>
      }
      <Switch>
        <Route path ="/" exact component={Login} />
        <Route path ="/registro" exact component={Registro} />
        <Route path="/app/feed" exact component={Feed} />
        <Route path="/app/top/:filter" exact component={App} />
        <Route path="/app/top" extact component={Top} />
        <Route path="/app/biblioteca" extact component={Biblioteca} />
        <Route path='/app/profile' exact component={Profile}/>
      </Switch>
    </Router>
  </Provider>

)

export default connect(
  state => ({
    isLoggedIn: selectors.isLoggedIn(state)
  })
)(Root);