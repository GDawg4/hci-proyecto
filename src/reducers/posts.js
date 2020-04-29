import * as types from '../types/posts'
import omit from 'lodash/omit';
import {combineReducers} from "redux";

const postById = (state = {}, action) => {
    switch (action.type) {
        case types.POST_PUBLISHED: {
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        }
        case types.POST_DELETED: {
            return omit(state, action.payload.id);
        }
        case types.POST_LIKED:{
            return {
                ...state,
                [action.payload.id]:{
                    ...state[action.payload.id],
                    likes:state[action.payload.id].likes+1
                }
            }
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
        case types.POST_PUBLISHED: {
            return [...state, action.payload.id]
        }
        /*case types.POST_LIKED:{
            return [...state, action.payload.id]
        }*/
        case types.POST_DELETED: {
            return omit(state, action.payload.id);
        }
        default: {
            return state;
        }
    }
};


const postReducer = combineReducers({
    postById,
    postOrder,
})

export default postReducer;