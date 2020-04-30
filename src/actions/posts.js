import { v4 } from 'node-uuid';

import * as types from '../types/posts';

export const sharePost = (id) =>({
    type: types.POST_SHARED,
    payload: { 
        id 
    }
});

export const likePost = (id) => ({
    type: types.POST_LIKED,
    payload: { id }
});

export const publishPost = (user, username, likes, content) =>(
    {
    type: types.POST_PUBLISHED,
    payload: { 
        id: v4(),
        user, 
        username,
        likes, 
        content,
        userLikes:[]
    }
});

export const deletePost = (id) => ({
    type: types.POST_DELETED,
    payload: { id }
});

