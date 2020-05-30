import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';

import './styles.css';
import * as songActions from '../../actions/songs';


const apiCall = (type, searchTerm) =>{
    const getIDWithInfo = `https://api.deezer.com/search/${type}/?q=${searchTerm}`;
    const corsURLID = `https://cors-anywhere.herokuapp.com/${getIDWithInfo}`;
    const axios = require('axios').default;
    return axios.get(corsURLID)
}

const MusicFormDiv = ({ handleSubmit }) => (
    <div className='music-form-container'>
        <form onSubmit={handleSubmit}>
            <div className='music-form'>
                <Field name ='toLook' component='input' type='text' className='search-text-field same-line' placeholder={'Descubre música'}/>
                <button className='search-song same-line' type='submit'>Buscar</button>
            </div>
        </form>
    </div>
);

const submit = (state, dispatch, { allForms }) =>{
    dispatch(songActions.clearSong());
    if(allForms.values){
        apiCall('track', allForms.values.toLook)
        .then(function (response) {
            response.data.data.slice(0,8).map(
                song => dispatch(songActions.findSong(song.id, song.title, song.artist.name, song.duration, song.album.cover_medium, song.album.title))
            )
        });
    }
}



const MusicForm = reduxForm({
    form: 'search', 
    onSubmit: submit,
})(MusicFormDiv);

export default MusicForm;
