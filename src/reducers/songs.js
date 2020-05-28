import * as types from '../types/songs'
import { combineReducers } from "redux";
// import { getPostById } from "./posts";

const byId = (state = {}, action)=>{
    switch (action.type) {
        case types.SONG_FOUND:{
            return {
                ...state,
                [action.payload.songID]:action.payload
            }
        }
        case types.SONG_CLEARED:{
            return {}
        }
        default:{
            return state
        }

    }
};

const order = (state=[], action)=>{
    switch (action.type) {
        case types.SONG_FOUND:{
            return [...state, action.payload.songID]
        }
        case types.SONG_CLEARED:{
            return []
        }
        default:{
            return state
        }
    }
}

const currentlySelected = (state = null, action) =>{
    switch (action.type) {
        case types.SONG_SELECTED:{
            return action.payload.selected
        }
        case types.SONG_CLEARED:{
            return null
        }
        default:{
            return state
        }
    }

}

const songsReducer = combineReducers({byId, order, currentlySelected})

export const getAllSongs = state => state.songsReducer.order.map( id => getSongByID(state, id));
export const getSongByID = (state, id) => state.songsReducer.byId[id];
export const getCurrentlySelected = (state) => state.songsReducer.currentlySelected
export const getCurrentlySelectedInfo = (state) => getSongByID(state, getCurrentlySelected(state))
export default songsReducer