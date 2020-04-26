import * as types from '../types/songs'

const byId = (state = {}, action)=>{
    switch (action.type) {
        case types.SONG_CREATED:{
            return state
        }
        default:{
            return state
        }

    }
};