import { v4 } from 'node-uuid';

import * as types from '../types/users';

export const createUser = (name, lastName, username, email, password) =>({
    type: types.USER_CREATED,
    payload: { 
        id: v4(), 
        name,
        lastName,
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

export const searchUser = parameter =>({
    type:types.USER_SEARCHED,
    payload:{
        parameter
    }
})

export const searchUserCleared = () => ({
    type:types.USER_SEARCHED_CLEARED,
    payload:{}
})

export const followUser = (currentUser, targetUser) =>({
    type:types.USER_FOLLOWED,
    payload:{
        currentUser,
        targetUser
    }
})

export const unfollowUser = (currentUser, targetUser) =>({
    type:types.USER_UNFOLLOWED,
    payload:{
        currentUser,
        targetUser
    }
})

export const saveSong = (currentUser, songID) =>({
    type: types.USER_SONG_SAVED,
    payload:{
        currentUser,
        songID
    }
})
export const unSaveSong = (currentUser, songID) =>({
    type: types.USER_SONG_UNSAVED,
    payload:{
        currentUser,
        songID
    }
})