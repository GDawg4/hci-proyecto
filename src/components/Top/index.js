import React from 'react';
import { connect } from 'react-redux';
import slice from 'lodash/slice'

import './styles.css';
import PlaylistCard from '../PlaylistCard';

import * as selectors from '../../reducers';

const Top = ({ playlists }) => (
    <div>
        <div className="top-screen-container">
            <h1>Top Charts</h1>
            <div id="test" className="top-playlists-container">
                {playlists.slice(0, 3).map( playlist => 
                    <PlaylistCard key={playlist.id} id={playlist.id} pic={playlist.cover} title={playlist.name} description={playlist.description} />
                )}
            </div>
            <h1>Recomendadas para ti</h1>
            <div className="recommended-playlists-container">
                {playlists.slice(3).map( playlist => 
                    <PlaylistCard key={playlist.id} id={playlist.id} pic={playlist.cover} title={playlist.name} description={playlist.description} />
                )}
            </div>
        </div>
    </div>
)

export default connect(
    state => ({
        playlists: selectors.getAllPlaylists(state)
    })
)(Top);