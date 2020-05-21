import React from "react";
import {connect} from 'react-redux';

import * as selectors from '../../reducers'
import * as userActions from '../../actions/users'
import default_image from "../../resources/default.svg";
import './styles.css'
import {followUser} from "../../actions/users";
import includes from "lodash/includes";
import {logOut} from "../../actions/auth";

const ProfileHeader = ({seenUser, follow}) => (
    <div>
        <div className='new-post'>
            <img alt="default-user" className='new-post-user' src={default_image}/>
            <div className='user-header'>{`${seenUser.name} ${seenUser.lastName}`}</div>
            <button className='follow-button' onClick={follow}>Seguir</button>
        </div>
    </div>
)

export default connect(
    (state) => ({
        seenUser:(selectors.getUserById(state, selectors.getSeenUser(state))) ? selectors.getUserById(state, selectors.getSeenUser(state)) : 'nel',
        currentUser:(selectors.getSelectedUser(state, selectors.getSeenUser(state))) ? selectors.getUserById(state, selectors.getSelectedUser(state)) : 'nel',
        allFollowing:selectors.getAllFollowing(state),
        transformedAllFollowing:selectors.getAllFollowing(state).map(user => selectors.getUserById(state, user).username)
    }),
    (dispatch) => ({
        follow(currentUser, targetUser){
            dispatch(followUser(currentUser, targetUser))
            console.log()
        }
    }),
    (stateProps, dispatchProps) => ({
        seenUser:stateProps.seenUser,
        currentUser:stateProps.currentUser,
        follow(){
            includes(stateProps.allFollowing, stateProps.seenUser.username) ? dispatchProps.follow(stateProps.currentUser.id, stateProps.seenUser.id) : console.log('already')
        }
    })
)(ProfileHeader)