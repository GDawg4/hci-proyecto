import * as types from '../types/posts';

export const sharePost = (id) =>({
    type: types.POST_SHARED,
    payload:{id}
});

export const likePost = (id) => ({
    type:types.POST_LIKED,
    payload:{id}
});

export const publishPost = (id, text, like, content) =>({
    types:types.POST_PUBLISHED,
    payload:{id, text, like, content}
});

export const reportPost = (id) => ({
    types:types.POST_REPORTED,
    payload:{id}
});