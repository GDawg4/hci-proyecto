import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import reducer from './reducers'
import * as postActions from './actions/posts';
import * as userActions from './actions/users'
import App from './app'

const store = createStore(reducer)

store.dispatch(postActions.publishPost("José López", "josesito12", 15, "Acabo de descubrir esta canción y me encantó!"))
store.dispatch(postActions.publishPost("Christian Molina", "chrismolina", 38, "Mi canción favorita para despertar."))
store.dispatch(postActions.publishPost("María Ximena", "xime222", 10, "La mejor canción del nuevo álbum de Bad Bunny. La mejor canción del nuevo álbum de Bad Bunny. La mejor canción del nuevo álbum de Bad Bunny. La mejor canción del nuevo álbum de Bad Bunny."))
store.dispatch(postActions.publishPost("Juan Donis", "juandonissss", 22, "Colores!"))
store.dispatch(postActions.publishPost("Pedro Martínez", "martinezpedro", 22, "Colores!"))
store.dispatch(userActions.createUser("Jose López", "josesito12", "joselop@gmail.com", "password123"))

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(<App store={store}/>, document.getElementById('root'))
