import React from 'react';
import {connect} from "react-redux";
import includes from 'lodash/includes';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/posts';
import * as userActions from '../../actions/users'

import default_image from '../../resources/default.svg';
import heart from '../../resources/heart.svg';
import heart_o from '../../resources/heartOrange.png';
import picture1 from '../../resources/logoLetras.svg';

import logoO from '../../resources/Turntable_final_Turntable isotipo naranja.svg';
import logoB from '../../resources/Turntable_final_Turntable isotipo negro.svg';
import {Link} from "react-router-dom";
import user from "../../reducers/user";

const Post = ({ user, content, likes, username, userLikes, userid, height, like, source, save, unSave, songsSaved, songID }) => (
    <li className="post-list-item">
        <div className="post-container">
            <div className="post-info-container">
                <div className="top-container">
                    <div className="post-extras">
                        <img src={default_image} className ="default" width="64" height="64" alt="pp"/>
                    </div>
                    <div className="post-data-container">
                        <div className="post-user">
                            <Link to={'/app/profile'}>
                                {user}
                                <span> - @{username}</span>
                            </Link>
                        </div>
                        <div className="post-content">
                            {content}
                        </div>
                    </div>
                </div>
                <div className="likes-share">
                    <img src={userLikes.includes(userid) ? heart_o : heart} className="heart" width="24" height="24" alt="like" onClick={ () => like(userid)}/>
                    <div className="likes">{likes}</div>
                    {includes(songsSaved[userid], songID) ?
                        <img src={logoO} className="heart" width="28" height="28" alt="save" onClick={() => unSave(userid, songsSaved)}/>:
                        <img src={logoB} className="heart" width="28" height="28" alt="save" onClick={() => save(userid, songsSaved)}/>}
                    {/*<img src={logoO} className="heart" width="28" height="28" alt="save" onClick={() => save(songsSaved)}/>*/}
                </div>
            </div>
            <img src={source} className="song" height={height} alt="song"/>
        </div>
    </li>
);

export default connect(
    state => ({
        userid: selectors.getSelectedUser(state),
        userID: selectors.getSelectedUser(state),
        songsSaved: selectors.getSongsSaved(state)
    }),
    (dispatch, { id, songID, userLikes }) => ({
        like(userid){
            dispatch(actions.likePost(userid, id))
        },
        save(userid, songsSaved){
            dispatch(userActions.saveSong(userid, songID))
        },
        unSave(userid){
            dispatch(userActions.unSaveSong(userid, songID))
        }
    })
)(Post)