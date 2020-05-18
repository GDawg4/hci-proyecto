import * as types from '../types/playlists';
import { combineReducers } from "redux";

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.PLAYLIST_FETCH_COMPLETED: {
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        }
        default: {
            return state;
        }
    }
};

const order = (state = [], action) => {
    switch (action.type) {
        case types.PLAYLIST_FETCH_COMPLETED: {
            return state.includes(action.payload.id) ? state : [...state, action.payload.id]
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

export const getPlaylistById = (state, id) => state.byId[id];
export const getAllPlaylists = state => state.order.map( id => getPlaylistById(state, id));
export const getSelectedPlaylist = state => state.selectedPlaylist;

export default playlistReducer;