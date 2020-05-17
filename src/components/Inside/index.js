import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Feed, Top, Biblioteca, Chat, Opciones } from '../../components';
import App from '../../app/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import MusicPlayer from '../MusicPlayer';
import NavBar from '../NavBar';


const Root = ({ match: {params} }) => (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/app/feed" exact component={Feed} />
        <Route path="/app/top/:filter" exact component={App} />
        <Route path="/app/top" extact component={Top} />
        <Route path="/app/biblioteca" extact component={Biblioteca} />
        <Route path="/app/chat" extact component={Chat} />
        <Route path="/app/opciones" extact component={Opciones} />
      </Switch>
      <MusicPlayer />
    </Router>
)

export default Root;