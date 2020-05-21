import { combineReducers } from 'redux';

import * as types from '../types/users';
import * as authTypes from '../types/auth';
import omit from 'lodash/omit';

const userById = (state = {}, action) => {
    switch (action.type){
        case types.USER_CREATED: {
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        }
        case types.USER_DELETED: {
            return omit(state, action.payload.id);
        }
        default: {
            return state;
        }
    }
}

const userByOrder = (state = [], action) => {
    switch (action.type) {
        case types.USER_CREATED: {
            return [...state, action.payload.id]
        }
        case types.USER_DELETED: {
            return omit(state, action.payload.id)
        }
        default: {
            return state;
        }
    }
}

const selectedUser = (state = null, action) =>{
    switch (action.type) {
        case types.USER_CREATED:{
            return action.payload.id
        }
        case authTypes.LOGOUT_COMPLETED: {
            return null;
        }
        default:{
            return state
        }
    }
}

const seenUser = (state = null, action) => {
    switch (action.type) {
        case types.USER_SELECTED: {
            return action.payload.id;
        }
        default:{
            return state
        }
    }
}

const searchedUser = (state = null, action) => {
    switch (action.type) {
        case types.USER_SEARCHED:{
            return action.payload.parameter
        }
        case types.USER_SEARCHED_CLEARED:{
            return null
        }
        default:{
            return state
        }
    }
}

const following = (state = {}, action) => {
    switch (action.type) {
        case types.USER_CREATED: {
            return {
                ...state,
                [action.payload.id]: []
            };
        }
        case types.USER_FOLLOWED:{
            const newState = [...state[action.payload.currentUser], action.payload.targetUser]
            return {
                ...state,
                [action.payload.currentUser]:newState
            }
        }
        case types.USER_UNFOLLOWED:{
            const newState = omit(state[action.payload.currentUser], action.payload.targetUser)
            return {
                ...state,
                [action.payload.currentUser]:newState
            }
        }
        default:{
            return state
        }
    }
}

export default combineReducers({
    selectedUser,
    userById,
    userByOrder,
    searchedUser,
    following,
    seenUser
})


export const getSelectedUser = (state) => state.users.selectedUser;
export const getSeenUser = (state) => state.users.seenUser;
export const getUserById = (state, id) => state.userById[id];
export const getUsers = state => state.userByOrder.map(id => getUserById(state, id));
export const getSearchParameter = state => state.searchedUser;
export const getAllFollowing = (state, currentUser) => state.users.following[currentUser]