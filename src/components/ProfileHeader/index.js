import React from "react";
import {connect} from 'react-redux';

import * as selectors from '../../reducers'
import * as userActions from '../../actions/users'
import default_image from "../../resources/default.svg";
import './styles.css'
import {followUser} from "../../actions/users";
import includes from "lodash/includes";
import {logOut} from "../../actions/auth";
import {unfollowUser} from "../../actions/users";
import user from "../../reducers/user";

const ProfileHeader = ({seenUser, follow, isFollowing, unfollow}) => (
    <div>
        <div className='new-post'>
            <img alt="default-user" className='new-post-user' src={default_image}/>
            <div className='user-header'>{`${seenUser.name} ${seenUser.lastName} ${isFollowing}`}</div>
            {isFollowing ? <button className='follow-button' onClick={unfollow}>No seguir</button> :
                <button className='follow-button' onClick={follow}>Seguir</button>}
        </div>
    </div>
)

export default connect(
    (state) => ({
        seenUser:(selectors.getUserById(state, selectors.getSeenUser(state))) ? selectors.getUserById(state, selectors.getSeenUser(state)) : 'nel',
        currentUser:(selectors.getSelectedUser(state, selectors.getSeenUser(state))) ? selectors.getUserById(state, selectors.getSelectedUser(state)) : 'nel',
        //allFollowing:selectors.getAllFollowing(state),
        transformedAllFollowing:selectors.getAllFollowing(state).map(user => selectors.getUserById(state, user).username)
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
        isFollowing:includes(stateProps.transformedAllFollowing, stateProps.seenUser.username)
    })
)(ProfileHeader)