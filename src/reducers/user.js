import { combineReducers } from 'redux';

import * as types from '../types/users';
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
        default:{
            return state
        }
    }
}

const users = combineReducers({
    selectedUser,
    userById,
    userByOrder,
})

export default users;

export const getSelectedUser = (state) => state.users.selectedUser;
export const getUserById = (state, id) => state.users.userById[id];
export const getUsers = state => state.users.userByOrder.map(id => getUserById(state, id));