import { combineReducers } from 'redux';
import postReducer from "./posts";
import users from './user';

import * as selectors from './user';
import * as postTypes from '../types/posts';
import * as navigationTypes from '../types/navigation';
import * as authTypes from '../types/auth';
import omit from 'lodash/omit';

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


const reducer = combineReducers({
    postReducer,
    navigationReducer,
    users,
    auth,
})

export default reducer;

export const getSelectedSection = (state) => state.navigationReducer;
export const getPost = (state, id) => state.postReducer.postById[id];
export const getAllPosts = (state) => state.postReducer.postOrder.map( id => getPost(state, id));
export const getUserById = (state, id) => selectors.getUserById(state.users, id);
export const getSelectedUser = (state) => selectors.getSelectedUser(state.users);
export const getUsers = state => selectors.getUsers(state.users);
export const getAuth = state => state.auth;