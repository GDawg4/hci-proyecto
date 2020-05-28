import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './configureStore';
import Root from './components/Root';
import * as postActions from './actions/posts';
import * as userActions from './actions/users';
// import * as selectors from './reducers';
// import * as songsActions from './actions/songs';
// import * as playlistActions from './actions/playlists'

// const apiCall = (id) =>{
//     const getIDWithInfo = `https://api.deezer.com/playlist/${id}`;
//     const corsURLID = `https://cors-anywhere.herokuapp.com/${getIDWithInfo}`;
//     const axios = require('axios').default;
//     return axios.get(corsURLID)
// }

const store = configureStore();

// apiCall('3196481502').then(function (response) {
//     store.dispatch(playlistActions.addPlaylist(response.data.id, response.data.title, response.data.description, response.data.picture_big, response.data.tracks))
// });

// apiCall('6756341044').then(function (response) {
//     store.dispatch(playlistActions.addPlaylist(response.data.id, response.data.title, response.data.description, response.data.picture_big, response.data.tracks))
// });

// apiCall('1450184495').then(function (response) {
//     store.dispatch(playlistActions.addPlaylist(response.data.id, response.data.title, response.data.description, response.data.picture_big, response.data.tracks))
// });

// apiCall('4424939002').then(function (response) {
//     store.dispatch(playlistActions.addPlaylist(response.data.id, response.data.title, response.data.description, response.data.picture_big, response.data.tracks))
// });

// apiCall('1401977015').then(function (response) {
//     store.dispatch(playlistActions.addPlaylist(response.data.id, response.data.title, response.data.description, response.data.picture_big, response.data.tracks))
// });

/*store.dispatch(userActions.createUser("José", "López", "josesito12", "joselop@gmail.com", "password123"))
store.dispatch(userActions.createUser("Uncle", "Sam", "pepetrueno123", "pp@gmail.com", "ppassword123"))
store.dispatch(userActions.createUser("Doug", "Las", "doug456", "doug@gmail.com", "chilerisimo"))
store.dispatch(userActions.createUser('Turn', "Table", "TTFire", "fire@gmail.com", "tttfirettt"))
store.dispatch(userActions.createUser('Kendrick', "Duckworth", "kdotking", "duckworth@gmail.com", "humblegtall"))

store.dispatch(postActions.publishPost("José López", "josesito12", 15, "Acabo de descubrir esta canción y me encantó!", '', 476676002))
store.dispatch(postActions.publishPost("Christian Molina", "chrismolina", 38, "Mi canción favorita para despertar.", '', 476676002))
store.dispatch(postActions.publishPost("María Ximena", "xime222", 10, "La mejor canción del nuevo álbum de Bad Bunny. La mejor canción del nuevo álbum de Bad Bunny. La mejor canción del nuevo álbum de Bad Bunny. La mejor canción del nuevo álbum de Bad Bunny.", '', 476676002))
store.dispatch(postActions.publishPost("Juan Donis", "juandonissss", 22, "Colores!", '', 476676002))
store.dispatch(postActions.publishPost("Pedro Martínez", "martinezpedro", 7, "Dark Lane Demo Tapes es puro fuego!", '', 476676002))*/

/*store.dispatch(postActions.publishPost('Uncle Sam', 'pepetrueno123', 0, 'plz work'))*/

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
