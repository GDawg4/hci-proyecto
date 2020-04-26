import * as types from '../types/friends'

export const addFriend = (user, friendID) =>({
    type:types.FRIEND_ADDED,
    payload:{user, friendID}
})