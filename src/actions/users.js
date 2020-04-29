import { v4 } from 'node-uuid';

import * as types from '../types/users';

export const createUser = (name, username, email, password) =>({
    type: types.USER_CREATED,
    payload: { 
        id: v4(), 
        name,
        username,
        email,
        password
    }
});

export const deleteUser = id => ({
    type: types.USER_DELETED,
    payload: { 
        id
    }
});

export const selectUser = id => ({
    type: types.USER_SELECTED,
    payload: {
        id
    }
});