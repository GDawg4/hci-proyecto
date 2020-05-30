import React from "react";
import { connect } from 'react-redux';

import includes from "lodash/includes";
import filter from "lodash/filter";

import './styles.css';
import * as selectors from '../../reducers'
import * as userActions from '../../actions/users'
import default_image from "../../resources/default.svg";

const ProfileHeader = ({seenUser, follow, isFollowing, unfollow, isSelf, songsConverted, allFollowing, allFollowers}) => (
    <div className='profile-header new-post'>
        <img alt="default-user" className='new-post-user' src={default_image}/>
        <div className='user-header'>
            <div className='username-name'>
                {`${seenUser.name} ${seenUser.lastName}`}
            </div>
            <div className="following-followers" style={{whiteSpace: 'pre'}}>
                {`Seguidores ${allFollowers-1}          Siguiendo ${allFollowing-1}`}
            </div>
        </div>
        {!isSelf? isFollowing  ? <button className='unfollow-button' onClick={unfollow}>Dejar de seguir</button> :
            <button className='follow-button' onClick={follow}>Seguir</button>:null}
    </div>
)


export default connect(
    (state) => ({
        seenUser:(selectors.getUserById(state, selectors.getSeenUser(state))) ? selectors.getUserById(state, selectors.getSeenUser(state)) : 'nel',
        selected_user: selectors.getSelectedUser(state),
        currentUser: (selectors.getSelectedUser(state, selectors.getSeenUser(state))) ? selectors.getUserById(state, selectors.getSelectedUser(state)) : 'nel',
        allFollowing:selectors.getAllFollowingSeen(state).length,
        transformedAllFollowing: selectors.getAllFollowing(state) === undefined ? null : selectors.getAllFollowing(state).map(user => selectors.getUserById(state, user).username),
        songsConverted: selectors.getSongsSaved(state)[selectors.getSeenUser(state)].map(song => filter(selectors.getAllSongs(state), songInfo => songInfo.songID === song)),
        allFollowers: selectors.getFollowArray(state).filter(array => includes(array, selectors.getSeenUser(state))).length
    }),
    (dispatch) => ({
        follow(currentUser, targetUser){
            dispatch(userActions.followUser(currentUser, targetUser))
        },
        unfollow(currentUser, targetUser){
            dispatch(userActions.unfollowUser(currentUser, targetUser))
        }
    }),
    (stateProps, dispatchProps) => ({
        seenUser:stateProps.seenUser,
        currentUser:stateProps.currentUser,
        isSelf: stateProps.seenUser === stateProps.currentUser,
        songsConverted:stateProps.songsConverted,
        allFollowing:stateProps.allFollowing,
        allFollowers:stateProps.allFollowers,
        follow(){
            !includes(stateProps.transformedAllFollowing, stateProps.seenUser.username) ? dispatchProps.follow(stateProps.currentUser.id, stateProps.seenUser.id) : console.log('already')
        },
        unfollow(){
            includes(stateProps.transformedAllFollowing, stateProps.seenUser.username) ? dispatchProps.unfollow(stateProps.currentUser.id, stateProps.seenUser.id) : console.log('already')
        },
        isFollowing: includes(stateProps.transformedAllFollowing, stateProps.seenUser.username)
    })
)(ProfileHeader)