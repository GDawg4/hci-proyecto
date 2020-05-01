import React from "react";
import Iframe from 'react-iframe';
import MusicForm from '../MusicForm';

const type = 'artist';
const id = '71652';
const searchTerm = 'Kendrick Lamar';
const getInfoWithID = `https://api.deezer.com/${type}/${id}`;
const getIDWithInfo = `https://api.deezer.com/search/${type}/?q=${searchTerm}&index=0&limit=1&output=json`;
const url = `https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=F59320&layout=dark&size=medium&type=${type}&id=${id}&app_id=1`;
/*const corsURLID = `https://cors-anywhere.herokuapp.com/${getInfoWithID}`;
const corsURLInfo = `https://cors-anywhere.herokuapp.com/${getIDWithInfo}`;
const axios = require('axios').default;*/
/*axios.get(corsURLInfo).then(function (response) {
    console.log(response.data.data[0].id)
});*/

const MusicPlayer = ({props}) =>
    (<div>
            <Iframe url= {url} className='player'/>
            <MusicForm/>
    </div>
    );


export default MusicPlayer
