import React from "react";
import Result from "../Result";
// import * as selectors from '../../reducers';

import './styles.css';

const SearchResults = ({ songs, isEmpty, isActive }) => (
    <div className='results'>
        {
            songs.length === 0 ? <p>{isActive ? '' : isEmpty ? 'Encuentra música fresca' : 'No hay resultados'} </p> :
            songs.map(song => <Result key={song.songID} songID={song.songID} title={song.title} artist={song.artist} duration={song.duration} album={song.album}  coverSource={song.cover}/>)
        }
    </div>
)

export default SearchResults;
