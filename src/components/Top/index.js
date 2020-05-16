import React from 'react';

import './styles.css';
import NavBar from '../NavBar';
import PlaylistCard from '../PlaylistCard';
import cover_one from '../../resources/COVER.jpg';
import cover_two from '../../resources/WP28.jpg';

const Top = () => (
    <div>
        <NavBar />
        <div className="top-screen-container">
            <h1>Top Charts</h1>
            <div id="test" className="top-playlists-container">
                <PlaylistCard id={1} pic={cover_one} title={'90´s Rap'} description={'Una playlist con las mejores canciones old school de los 90'}/>
                <PlaylistCard id={2} pic={cover_one} title={'90´s Rap'} description={'Una playlist con las mejores canciones old school de los 90'}/>
                <PlaylistCard id={3} pic={cover_one} title={'90´s Rap'} description={'Una playlist con las mejores canciones old school de los 90'}/>
                <PlaylistCard id={4} pic={cover_one} title={'90´s Rap'} description={'Una playlist con las mejores canciones old school de los 90'}/>
                <PlaylistCard id={1} pic={cover_one} title={'90´s Rap'} description={'Una playlist con las mejores canciones old school de los 90'}/>
                <PlaylistCard id={2} pic={cover_one} title={'90´s Rap'} description={'Una playlist con las mejores canciones old school de los 90'}/>
                <PlaylistCard id={3} pic={cover_one} title={'90´s Rap'} description={'Una playlist con las mejores canciones old school de los 90'}/>
                <PlaylistCard id={4} pic={cover_one} title={'90´s Rap'} description={'Una playlist con las mejores canciones old school de los 90'}/>
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

export default Top;