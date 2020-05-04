import React from 'react';
import Iframe from 'react-iframe';
import { connect } from "react-redux";

import SearchResults from "../SearchResults";
import MusicForm from '../MusicForm';

import './styles.css';
import * as selectors from "../../reducers";

const type = 'tracks';
const id = '457602422';
const searchTerm = 'Kendrick Lamar';
const getInfoWithID = `https://api.deezer.com/${type}/${id}`;
const getIDWithInfo = `https://api.deezer.com/search/${type}/?q=${searchTerm}&index=0&limit=1&output=json`;
const url = `https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=432&height=350&color=F59320&layout=dark&size=medium&type=${type}&id=${id}&app_id=1`;
/*const corsURLID = `https://cors-anywhere.herokuapp.com/${getInfoWithID}`;
const corsURLInfo = `https://cors-anywhere.herokuapp.com/${getIDWithInfo}`;
const axios = require('axios').default;*/
/*axios.get(corsURLInfo).then(function (response) {
    console.log(response.data.data[0].id)
});*/

const MusicPlayer = ({ allForms, songs, currentlySelected }) =>
    (
    <div className='music-player'>
        <MusicForm allForms = {allForms}/>
        <SearchResults songs = {songs}/>
        <div className='player-wrapper'>
            <Iframe url= {`https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=450&height=450&color=F59320&layout=dark&size=large&type=tracks&id=${currentlySelected}&app_id=1`} className='player'/>
        </div>
        {/*{true ? <div className='no-music'>No hay...</div> : <div>Hay </div>}*/}
    </div>
);


export default  connect(
    state => ({
        allForms: selectors.getFormsSearch(state),
        songs: selectors.getAllSongs(state),
        currentlySelected: selectors.getCurrentlySelected(state),
    }),
    undefined
)(MusicPlayer)
