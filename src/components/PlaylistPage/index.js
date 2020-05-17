import React from 'react';

import './styles.css';
import cover from '../../resources/COVER.jpg';
import play_button from '../../resources/play-icon-orange.svg';


const PlaylistPage = ({ filter }) => (
    <div className="playlist-page-container">
        <img alt="cover" className="playlist-full-image" src={cover} width='100%' height='600' />
        <div className="playlist-info-top">
            <h1 >Una playlist con las mejores canciones old school de los 90</h1>
            <img alt="play" src={play_button} className="playlist-play-icono"/>
        </div>
        <div className="playlist-songs-container">

        </div>
    </div>

)

export default PlaylistPage;