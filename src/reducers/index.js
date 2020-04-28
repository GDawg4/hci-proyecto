import { combineReducers } from 'redux';

import users from './user';

import * as selectors from './user';
import * as postTypes from '../types/posts';
import * as navigationTypes from '../types/navigation';
import * as authTypes from '../types/auth';
import omit from 'lodash/omit';

// Se combinan los reductores de evento y bebe
const postById = (state = {}, action) => {
    switch (action.type) {
        case postTypes.POST_PUBLISHED: {
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        }
        case postTypes.POST_DELETED: {
            return omit(state, action.payload.id);
        }
        default: {
            return state;
        }
        // case types.POST_LIKED: {
        //     return {
        //         ...state,
        //         [action.payload.id]: { 
        //             likes: +1,
        //         }
        //     }
        // }
    }
};

const postOrder = (state = [], action) => {
    switch (action.type) {
        case postTypes.POST_PUBLISHED: {
            return [...state, action.payload.id]
        }
        case postTypes.POST_DELETED: {
            return omit(state, action.payload.id);
        }
        default: {
            return state;
        }
    }
};

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

const postReducer = combineReducers({
    postById,
    postOrder,
})

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
export const getUsers = state => selectors.getUsers(state.users);
export const getAuth = state => state.auth;