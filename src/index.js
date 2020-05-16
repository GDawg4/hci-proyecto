import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './configureStore';
import Root from './components/Root';
// import * as postActions from './actions/posts';
// import * as userActions from './actions/users';
// import * as selectors from './reducers';
// import * as songsActions from './actions/songs';


const store = configureStore();

// store.dispatch(postActions.publishPost("José López", "josesito12", 15, "Acabo de descubrir esta canción y me encantó!"))
// store.dispatch(postActions.publishPost("Christian Molina", "chrismolina", 38, "Mi canción favorita para despertar."))
// store.dispatch(postActions.publishPost("María Ximena", "xime222", 10, "La mejor canción del nuevo álbum de Bad Bunny. La mejor canción del nuevo álbum de Bad Bunny. La mejor canción del nuevo álbum de Bad Bunny. La mejor canción del nuevo álbum de Bad Bunny."))
// store.dispatch(postActions.publishPost("Juan Donis", "juandonissss", 22, "Colores!"))
// store.dispatch(postActions.publishPost("Pedro Martínez", "martinezpedro", 7, "Dark Lane Demo Tapes es puro fuego!"))
// store.dispatch(userActions.createUser("José", "López", "josesito12", "joselop@gmail.com", "password123"))
//console.log('Yay', selectors.getNewPostText(store.getState()))
//console.log(selectors.getAllPosts(store.getState()));


ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
