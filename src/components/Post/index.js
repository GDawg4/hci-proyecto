import React from 'react';
import {connect} from "react-redux";

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/posts';

import default_image from '../../resources/default.svg';
import heart from '../../resources/heart.svg';
import heart_o from '../../resources/heartOrange.png';
import picture1 from '../../resources/logoLetras.svg';
// import { selectUser } from '../../actions/users';
// import song_default from '../../resources/song-default.svg';
// import picture from '../../resources/pic1.jpg';

const Post = ({ user, content, likes, username, userLikes, userid, height, like, source }) => (
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
                    <img src={userLikes.includes(userid) ? heart_o : heart} className="heart" width="24" height="24" alt="like" onClick={ () => like(userid)}/>
                    <div className="likes">{likes}</div>
                </div>
            </div>
            <img src={source} className="song" height={height} alt="song"/>
        </div>
    </li>
);

export default connect(
    state => ({
        userid: selectors.getSelectedUser(state),
    }),
    (dispatch, { id }) => ({
        like(userid){
            dispatch(actions.likePost(userid, id))
        },
    })
)(Post)