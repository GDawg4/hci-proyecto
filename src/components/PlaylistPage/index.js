import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Song from '../Song';

import './styles.css';
import * as selectors from '../../reducers';
import * as songActions from '../../actions/songs'

import play_button from '../../resources/play-icon-orange.svg';
import arrow from '../../resources/back-arrow-blue.svg';

const PlaylistPage = ({ filter, playlist, onSelect }) => (
    <div className="playlist-page-container">
        <Link to="/app/top"><img alt="back-arrow" src={arrow} className="playlist-page-header" width="25" height="15"/></Link>
        <div className="playlist-page-top">    
            <img alt="cover" className="playlist-full-image" src={playlist.cover} />
            <div className="playlist-info-top">
                <h1>{playlist.name}</h1>
                <h2>{playlist.description}</h2>
                <img onClick={() => onSelect(playlist.tracks.data[0].id)} alt="play" src={play_button} className="playlist-play-icono" height="50" width="50"/>
            </div>
        </div>
        <div className="playlist-songs-info">
            <div className="song-about list-name">CANCIÓN</div>
            <div className="song-about list-artist">ARTISTA</div>
            <div className="song-about list-album">ÁLBUM</div>
        </div>
        <div className="playlist-songs-container">
            {
                playlist.tracks.data.map(track =>
                    <Song key={track.id} id={track.id} title={track.title} artist={track.artist.name} album={track.album.title} cover={track.album.cover_medium}/>
                )
            }
        </div>
    </div>

)

export default connect(
    (state, { filter }) => ({
        playlist: selectors.getPlaylistById(state, filter)
    }),
    dispatch => ({
        onSelect(id){
            dispatch(songActions.selectSong(id))
        }
    })
)(PlaylistPage);