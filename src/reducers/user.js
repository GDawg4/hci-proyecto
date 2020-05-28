import { combineReducers } from 'redux';

import * as types from '../types/users';
import * as authTypes from '../types/auth';
import omit from 'lodash/omit';
import filter from 'lodash/filter'
import includes from 'lodash/includes'

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

const songsSaved = (state = {}, action) => {
    switch (action.type) {
        case types.USER_CREATED: {
            return {
                ...state,
                [action.payload.id]: []
            };
        }
        case types.USER_SONG_SAVED:{
            console.log(state)
            console.log(action.payload.currentUser)
            console.log(state[action.payload.currentUser])
            const newState = [...state[action.payload.currentUser], action.payload.songID]
            return {
                ...state,
                [action.payload.currentUser]:newState
            }
        }
        case types.USER_SONG_UNSAVED:{
            const newState = filter(state[action.payload.currentUser], value => value !== action.payload.songID)
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

const following = (state = {}, action) => {
    switch (action.type) {
        case types.USER_CREATED: {
            return {
                ...state,
                [action.payload.id]: [action.payload.id]
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
            const newState = filter(state[action.payload.currentUser], value => value !== action.payload.targetUser)
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
    userById,
    userByOrder,
    searchedUser,
    selectedUser,
    seenUser,
    following,
    songsSaved
})


export const getSelectedUser = (state) => state.users.selectedUser;
export const getSeenUser = (state) => state.users.seenUser;
export const getUserById = (state, id) => state.userById[id];
export const getUsers = state => state.userByOrder.map(id => getUserById(state, id));
export const getSearchParameter = state => state.searchedUser;
export const getAllFollowing = (state, currentUser) => state.users.following[currentUser];
export const getIsFollowing = (state) => includes(getAllFollowing(state, getSelectedUser(state)), getSeenUser(state));
export const getSongsSaved = (state, currentUser) => state.users.songsSaved;