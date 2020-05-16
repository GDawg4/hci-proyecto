import * as types from '../types/playlists';
import { combineReducers } from "redux";

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.PLAYLIST_FETCH_COMPLETED: {
            const newState = {}
            action.payload.map(playlist => newState[playlist.id] = playlist)
            return newState;
        }
        default: {
            return state;
        }
    }
};

const order = (state = [], action) => {
    switch (action.type) {
        case types.POST_PUBLISHED: {
            return action.payload.map(playlist => playlist.id)
        }
        default: {
            return state;
        }
    }
};

const selectedPlaylist = (state = null, action) => {
    switch (action.type) {
        case types.PLAYLIST_SELECTED: {
            return action.payload.playlistId
        }
        default: {
            return state;
        }
    }
}

const playlistReducer = combineReducers({
    byId,
    order,
    selectedPlaylist,
})

export const getPostById = (state, id) => state.postReducer.postById[id];
export const getAllPosts = state => state.postReducer.postOrder.map( id => getPostById(state, id));
export const getSelectedPlaylist = state => state.selectedPlaylist;

export default playlistReducer;