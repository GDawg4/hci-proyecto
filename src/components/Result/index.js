import React from 'react';
import { connect } from 'react-redux';

// import { selectSong } from "../../actions/songs";

import './styles.css';
import * as songActions from '../../actions/songs';
import play_icon from '../../resources/play-icon-orange.svg';

function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

const Result = ({ /*songID,*/ title, artist, coverSource, duration, selectSong, album }) =>(
    <div className='result-wrapper' onClick={selectSong}>
        <img className="result-image" alt="result" src={ coverSource } width={'75'} />
        <div className = 'result-info'>
            <div className = 'result-title'>
                {title}
            </div>
            <div className = 'result-artist'>
                {`${artist} - ${album}`}
            </div>
        </div>
        <div className='result-rest'>
            <img className='play-btn' alt="play" onClick={selectSong} src={play_icon} height={50} width={50}/>
            <div className='result-duration'>{fancyTimeFormat(duration)}</div>
        </div>
    </div>
)



export default connect(
    undefined,
    (dispatch, { songID/*, title*/ })=> ({
        selectSong(){
            dispatch(songActions.selectSong(songID))
        }
    })
)(Result)