import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Login, Registro } from '../../components';
import Inside from '../Inside';

import 'bootstrap/dist/css/bootstrap.min.css';



const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path ="/" exact component={Login} />
        <Route path ="/registro" exact component={Registro} />
        <Route path ="/app/:section" exact component={Inside} />
        <Route path ="/app/top/:filter" exact component={Inside} />
      </Switch>
    </Router>
  </Provider>

)

export default Root;