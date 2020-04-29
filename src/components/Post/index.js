import React from 'react';

import './styles.css';
import default_image from '../../resources/default.svg';
import heart from '../../resources/heart.svg';
//import song_default from '../../resources/song-default.svg';
import picture from '../../resources/pic1.jpg';
import picture1 from '../../resources/logoLetras.png'
import {connect} from "react-redux";
import * as actions from '../../actions/posts';

const Post = ({ user, content, likes, username, height, like }) => (
    <li>
        <div className="post-container">
            <div className="post-info-container">
                <div className="top-container">
                    <div className="post-extras">
                        <img src={default_image} className ="default" width="64" height="64" alt="pp"/>
                    </div>
                    <div className="post-data-container">
                        <div className="post-user">
                            {user}
                            <span> - @{username}</span>
                        </div>
                        <div className="post-content">
                            {content}
                        </div>
                    </div>
                </div>
                <div className="likes-share">
                    <img src={heart} className="heart" width="24" height="24" alt="like" onClick={like}/>
                    <div className="likes">{likes}</div>
                </div>
            </div>
            <img src={picture1} className="song" height={height} alt="song"/>
        </div>
    </li>
);

export default connect(
    undefined,
    (dispatch, {index})=>({
        like(){
            dispatch(actions.likePost(index))
        }
    })
)(Post)