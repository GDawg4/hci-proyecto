import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import PlaylistCard from '../PlaylistCard';
import cover_two from '../../resources/WP28.jpg';
import * as selectors from '../../reducers';

const Top = ({ playlists }) => (
    <div>
        <div className="top-screen-container">
            <h1>Top Charts</h1>
            <div id="test" className="top-playlists-container">
                {playlists.map( playlist => 
                    <PlaylistCard key={playlist.id} id={playlist.id} pic={playlist.cover} title={playlist.name} description={playlist.description} />
                )}
            </div>
            <h1>Recomendadas para ti</h1>
            <div className="recommended-playlists-container">
                <PlaylistCard id={5} pic={cover_two} title={'Today´s Hits'} description={'Los éxitos más recientes y frescos del momento'}/>
                <PlaylistCard id={6} pic={cover_two} title={'Today´s Hits'} description={'Los éxitos más recientes y frescos del momento'}/>
                <PlaylistCard id={7} pic={cover_two} title={'Today´s Hits'} description={'Los éxitos más recientes y frescos del momento'}/>
                <PlaylistCard id={8} pic={cover_two} title={'Today´s Hits'} description={'Los éxitos más recientes y frescos del momento'}/>
            </div>
        </div>
    </div>
)

export default connect(
    state => ({
        playlists: selectors.getAllPlaylists(state)
    })
)(Top);