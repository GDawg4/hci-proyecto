import React from 'react';
import { connect } from 'react-redux';

// import { selectSong } from "../../actions/songs";

import './styles.css';
import * as selectors from '../../reducers'
import * as songActions from '../../actions/songs';
import * as userActions from '../../actions/users'
import play_icon from '../../resources/play-icon-orange.svg';
import logoOrange from '../../resources/Turntable_final_Turntable isotipo naranja.svg'

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

const Result = ({ songID, title, artist, coverSource, duration, selectSong, album, currentUser, saveSong }) =>(
    <div className='result-wrapper'>
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
            <img className='play-btn' alt="play" onClick={selectSong} src={play_icon} height={30} width={30}/>
            <img className='play-btn' alt="play" onClick={() => saveSong(currentUser, songID)} src={logoOrange} height={30} width={30}/>
            <div className='result-duration'>{fancyTimeFormat(duration)}</div>
        </div>
    </div>
)



export default connect(
    (state)=>({
        currentUser:selectors.getSelectedUser(state)
    }),
    (dispatch, { songID/*, title*/ })=> ({
        selectSong(){
            dispatch(songActions.selectSong(songID))
        },
        saveSong(user, song){
            dispatch(userActions.saveSong(user, song))
        }
    })
)(Result)