import { v4 } from 'node-uuid';

import * as types from '../types/posts';

export const sharePost = id =>({
    type: types.POST_SHARED,
    payload: { 
        id 
    }
});

export const likePost = (username, id) => ({
    type: types.POST_LIKED,
    payload: { 
        username,
        id,
    }
});

export const publishPost = (user, username, likes, content, source, songID) =>(
    {
    type: types.POST_PUBLISHED,
    payload: { 
        id: v4(),
        user, 
        username,
        likes,
        content,
        source,
        songID,
        userLikes:[]
    }
});

export const deletePost = id => ({
    type: types.POST_DELETED,
    payload: { id }
});

