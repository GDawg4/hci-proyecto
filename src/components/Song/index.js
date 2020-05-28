import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers'
import * as userActions from '../../actions/users'
import * as songActions from '../../actions/songs';
import {selectSong} from "../../actions/songs";


const Song = ({ title, artist, album, cover, select, deSelect, currentUser, songID }) => (
    <div className="song-container" onClick={select}>
        <div className="song-basic song-item">
            <img alt="song cover" className="song-image" src={cover} width="75" height="75"/>
            <div className="song-title song-text">{title}</div>
        </div>
        <div className="song-artist song-item song-text">{artist}</div>
        <div className="song-album song-item song-text">{album}</div>
        <div onClick={() => deSelect(currentUser, songID)}>X</div>
    </div>
)

export default connect(
    (state) =>({
        currentUser:selectors.getSelectedUser(state)
    }),
    (dispatch,{songID}) => ({
        select(){
            dispatch(songActions.selectSong(songID))
        },
        deSelect(user, song){
            dispatch(userActions.unSaveSong(user, song))
        }
    })
)(Song);