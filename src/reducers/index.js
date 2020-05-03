import { combineReducers } from 'redux';
import postReducer from "./posts";
import users from './user';
import songsReducer from "./songs";

import * as selectors from './user';
import * as postSelectors from './posts'
import * as postTypes from '../types/posts';
import * as navigationTypes from '../types/navigation';
import * as authTypes from '../types/auth';
import * as songSelectors from './songs'
import omit from 'lodash/omit';
import isNil from 'lodash/isNil'


// Se combinan los reductores de evento y bebe


const navigationReducer = (state = 'feed', action) => {
    switch (action.type) {
        case navigationTypes.SECTION_SELECTED: {
            return action.payload.section;
        }
        default: {
            return state;
        }
    }
}

const auth = (state = null, action) => {
    switch (action.type) {
        case authTypes.AUTH_COMPLETED: {
            return "COMPLETED";
        }
        case authTypes.AUTH_FAILED: {
            return "FAILED"
        }
        default: {
            return state;
        }
    }
}

const loggedIn = (state = false, action) => {
    switch (action.type) {
        case authTypes.AUTH_COMPLETED: {
            return true;
        }
        default: {
            return state;
        }
    }
}

const reducer = combineReducers({
    postReducer,
    navigationReducer,
    users,
    auth,
    loggedIn,
    songsReducer
})

export default reducer;

export const isLoggedIn = state => state.reducer.loggedIn;
export const getSelectedSection = (state) => state.reducer.navigationReducer;
export const getAllPosts = (state) => postSelectors.getAllPosts(state.reducer);
export const getUserById = (state, id) => selectors.getUserById(state.reducer, id);
export const getSelectedUser = (state) => selectors.getSelectedUser(state.reducer);
export const getUsers = state => selectors.getUsers(state.reducer);
export const getAuth = state => state.reducer.auth;
export const getFormsNewPost = state => state.form.newPost;
export const getFormsSearch = state => state.form.search;
export const getAllSongs = state => songSelectors.getAllSongs(state.reducer)
export const getSongById = (state, id) => songSelectors.getSongByID(state.songsReducer, id)
export const getCurrentlySelected = (state) => songSelectors.getCurrentlySelected(state.reducer)
//songSelectors.getSongByID(state.reducer, getCurrentlySelected(state))
export const getCurrentlySelectedInfo = (state) => songSelectors.getSongByID(state.reducer, getCurrentlySelected(state))