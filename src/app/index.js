import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Feed, Login, Top, Biblioteca, Chat, Opciones, Registro } from '../components'; 

import 'bootstrap/dist/css/bootstrap.min.css';


const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path ="/" exact component={Login} />
        <Route path ="/registro" exact component={Registro} />
        <Route path="/feed" exact component={Feed} />
        <Route path="/top" extact component={Top} />
        <Route path="/biblioteca" extact component={Biblioteca} />
        <Route path="/chat" extact component={Chat} />
        <Route path="/opciones" extact component={Opciones} />
      </Switch>
    </Router>
  </Provider>
)

export default App;