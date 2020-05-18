import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Feed, Top, Biblioteca, Chat, Login } from '../../components';
import App from '../../app/index';
import MusicPlayer from '../MusicPlayer';
import NavBar from '../NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as selectors from '../../reducers';


const Inside = ({ isLoggedIn }) => (
    <Router>
        {
          isLoggedIn ? <NavBar /> : <div/>
        }
        {
          isLoggedIn ? <MusicPlayer /> : <div/>
        }
      <Switch>
        <Route path="/logout" exact component={Login}/>
        <Route path="/app/feed" exact component={Feed} />
        <Route path="/app/top/:filter" exact component={App} />
        <Route path="/app/top" extact component={Top} />
        <Route path="/app/biblioteca" extact component={Biblioteca} />
        <Route path="/app/chat" extact component={Chat} />
      </Switch>
    </Router>
)

export default connect(
  state => ({
    isLoggedIn: selectors.isLoggedIn(state)
  })
)(Inside);