import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import * as selectors from './reducers'

import reducer from './reducers'
import * as postActions from './actions/posts';
import * as userActions from './actions/users'
import App from './app'


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(postActions.publishPost("José López", "josesito12", 15, "Acabo de descubrir esta canción y me encantó!"))
store.dispatch(postActions.publishPost("Christian Molina", "chrismolina", 38, "Mi canción favorita para despertar."))
store.dispatch(postActions.publishPost("María Ximena", "xime222", 10, "La mejor canción del nuevo álbum de Bad Bunny. La mejor canción del nuevo álbum de Bad Bunny. La mejor canción del nuevo álbum de Bad Bunny. La mejor canción del nuevo álbum de Bad Bunny."))
store.dispatch(postActions.publishPost("Juan Donis", "juandonissss", 22, "Colores!"))
store.dispatch(postActions.publishPost("Pedro Martínez", "martinezpedro", 22, "Colores!"))
store.dispatch(userActions.createUser("Jose López", "josesito12", "joselop@gmail.com", "password123"))
console.log(selectors.getAllPosts(store.getState())[0].id);
store.dispatch(postActions.likePost(selectors.getAllPosts(store.getState())[0].id));
//console.log(selectors.getAllPosts(store.getState()));

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(<App store={store}/>, document.getElementById('root'))
