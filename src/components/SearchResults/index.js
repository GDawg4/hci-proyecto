import React from "react";
import Result from "../Result";
import * as selectors from '../../reducers'
import './styles.css'

const SearchResults = ({songs}) => (
    <div className='results'>
        {
            songs.length == 0 ? <p>No hay resultados</p>:
            songs.map(song => <Result key={song.songID} songID={song.songID} title={song.title} artist={song.artist} duration={song.duration} coverSource={song.cover}/>)
        }
    </div>
)

export default SearchResults
