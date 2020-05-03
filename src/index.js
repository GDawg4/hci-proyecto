import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import {reducer as formReducer} from 'redux-form'

import * as selectors from './reducers'
import reducer from './reducers'
import * as postActions from './actions/posts';
import * as userActions from './actions/users';
import * as songsActions from './actions/songs'
import App from './app'

const rootReducer = combineReducers({reducer, form:formReducer});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/*store.dispatch(postActions.publishPost("Christian Molina", "chrismolina", 38, "Mi canción favorita para despertar."))
store.dispatch(postActions.publishPost("María Ximena", "xime222", 10, "La mejor canción del nuevo álbum de Bad Bunny. La mejor canción del nuevo álbum de Bad Bunny. La mejor canción del nuevo álbum de Bad Bunny. La mejor canción del nuevo álbum de Bad Bunny."))
store.dispatch(postActions.publishPost("Juan Donis", "juandonissss", 22, "Colores!"))
store.dispatch(postActions.publishPost("Pedro Martínez", "martinezpedro", 22, "Colores!"))*/
store.dispatch(userActions.createUser("Jose López", "josesito12", "joselop@gmail.com", "password123"))
store.dispatch(postActions.publishPost("José López", "josesito12", 15, "Acabo de descubrir esta canción y me encantó!", selectors.getCurrentlySelectedInfo(store.getState())))
console.log(store.getState())
console.log('song',selectors.getCurrentlySelectedInfo(store.getState()))

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
