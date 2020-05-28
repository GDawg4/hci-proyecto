import { combineReducers } from 'redux';
import postReducer from "./posts";
import users from './user';
import songsReducer from "./songs";
import playlistReducer from './playlists';

import * as selectors from './user';
import * as postSelectors from './posts'
import * as playlistSelectors from './playlists';
// import * as postTypes from '../types/posts';
import * as navigationTypes from '../types/navigation';
import * as authTypes from '../types/auth';
import * as songSelectors from './songs'
// import omit from 'lodash/omit';
// import isNil from 'lodash/isNil'


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
            return "FAILED";
        }
        case authTypes.LOGOUT_COMPLETED: {
            return null;
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
        case authTypes.LOGOUT_COMPLETED: {
            return false;
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
    songsReducer,
    playlistReducer,
})

export default reducer;

export const isLoggedIn = state => state.reducer.loggedIn;
export const getSelectedSection = (state) => state.reducer.navigationReducer;
export const getAllPosts = (state) => postSelectors.getAllPosts(state.reducer);
export const getUserById = (state, id) => selectors.getUserById(state.reducer.users, id);
export const getSelectedUser = (state) => selectors.getSelectedUser(state.reducer);
export const getAllFollowing = (state) => selectors.getAllFollowing(state.reducer, getSelectedUser(state));
export const getIsFollowing = (state) => selectors.getIsFollowing(state.reducer);
export const getSeenUser = (state) => selectors.getSeenUser(state.reducer);
export const getUsers = state => selectors.getUsers(state.reducer.users);
export const getSongsSaved = (state) =>selectors.getSongsSaved(state.reducer, getSelectedUser(state))

export const getSomething = state => state;
export const getSearchedParameter = state => selectors.getSearchParameter(state.reducer.users)
export const getAuth = state => state.reducer.auth;
export const getFormsNewPost = state => state.form.newPost;
export const getFormsSearch = state => state.form.search;
export const getFormsPeople = state => state.form.searchPeople
export const getAllSongs = state => songSelectors.getAllSongs(state.reducer)
export const getSongById = (state, id) => songSelectors.getSongByID(state.songsReducer, id)
export const getCurrentlySelected = (state) => songSelectors.getCurrentlySelected(state.reducer)
//songSelectors.getSongByID(state.reducer, getCurrentlySelected(state))
export const getCurrentlySelectedInfo = (state) => songSelectors.getSongByID(state.reducer, getCurrentlySelected(state))

export const getPlaylistById = (state, id) => playlistSelectors.getPlaylistById(state.reducer.playlistReducer, id);
export const getAllPlaylists = state => playlistSelectors.getAllPlaylists(state.reducer.playlistReducer);
export const getSelectedPlaylist = state => playlistSelectors.getSelectedPlaylist(state.reducer.playlistReducer);
