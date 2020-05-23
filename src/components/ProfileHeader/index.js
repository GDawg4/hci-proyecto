import React from "react";
import { connect } from 'react-redux';

import includes from "lodash/includes";

import './styles.css';
import * as selectors from '../../reducers'
import * as userActions from '../../actions/users'
import default_image from "../../resources/default.svg";
import user from "../../reducers/user";
import { followUser } from "../../actions/users";
import { logOut } from "../../actions/auth";
import { unfollowUser } from "../../actions/users";


const ProfileHeader = ({ selected_user, seenUser, follow, isFollowing, unfollow }) => (
    <div>
        <div className='profile-header new-post'>
            <img alt="default-user" className='new-post-user' src={default_image}/>
            <div className='user-header'>{`${seenUser.name} ${seenUser.lastName}`}</div>
            {seenUser.id === selected_user ? <div/> : isFollowing ? <button className='unfollow-button' onClick={unfollow}>Dejar de seguir</button> :
                <button className='follow-button' onClick={follow}>Seguir</button>}
        </div>
    </div>
)


export default connect(
    (state) => ({
        seenUser:(selectors.getUserById(state, selectors.getSeenUser(state))) ? selectors.getUserById(state, selectors.getSeenUser(state)) : 'nel',
        selected_user: selectors.getSelectedUser(state),
        currentUser: (selectors.getSelectedUser(state, selectors.getSeenUser(state))) ? selectors.getUserById(state, selectors.getSelectedUser(state)) : 'nel',
        //allFollowing:selectors.getAllFollowing(state),
        transformedAllFollowing: selectors.getAllFollowing(state) === undefined ? null : selectors.getAllFollowing(state).map(user => selectors.getUserById(state, user).username)
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
        seenUser: stateProps.seenUser,
        currentUser: stateProps.currentUser,
        selected_user: stateProps.selected_user,
        follow(){
            !includes(stateProps.transformedAllFollowing, stateProps.seenUser.username) ? dispatchProps.follow(stateProps.currentUser.id, stateProps.seenUser.id) : console.log('already')
            //dispatchProps.follow(stateProps.currentUser.id, stateProps.seenUser.id)
            //console.log(stateProps.transformedAllFollowing)
            //console.log(stateProps.seenUser.username)
        },
        unfollow(){
            includes(stateProps.transformedAllFollowing, stateProps.seenUser.username) ? dispatchProps.unfollow(stateProps.currentUser.id, stateProps.seenUser.id) : console.log('already')
            //console.log(stateProps.currentUser.id, stateProps.seenUser.id)
        },
        isFollowing: includes(stateProps.transformedAllFollowing, stateProps.seenUser.username)
    })
)(ProfileHeader)