import React from "react";
import './styles.css'
import {connect} from "react-redux";
import {selectSong} from "../../actions/songs";
import * as songActions from '../../actions/songs'
const Result = ({songID, title, artist, coverSource, duration, selectSong}) =>(
    <div className='result-wrapper' onClick={selectSong}>
        <img src={coverSource}/>
        <div className = 'result-info'>
            <div className = 'result-title'>
                {title}
            </div>
            <div className = 'result-artist'>
                {artist}
            </div>
        </div>
        <div className= 'result-duration'>
            {duration}
        </div>
    </div>
)



export default connect(undefined,
    (dispatch, {songID, title})=> ({
    selectSong(){
        dispatch(songActions.selectSong(songID))
    }}))
(Result)