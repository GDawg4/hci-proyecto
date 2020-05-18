import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as songActions from '../../actions/songs';


const Song = ({ title, artist, album, cover, id, onSelect }) => (
    <div className="song-container" onClick={() => onSelect(id)}>
        <div className="song-basic song-item">
            <img alt="song cover" className="song-image" src={cover} width="75" height="75"/>
            <div className="song-title song-text">{title}</div>
        </div>
        <div className="song-artist song-item song-text">{artist}</div>
        <div className="song-album song-item song-text">{album}</div>
    </div>
)

export default connect(
    undefined,
    dispatch => ({
        onSelect(id){
            dispatch(songActions.selectSong(id))
        }
    })
)(Song);