import * as types from '../types/songs'

export const likeSong = (songID) => ({
    type:types.SONG_LIKED,
    payload:{songID}
});

export const shareSong = (songID, content) =>  ({
    type:types.SONG_SHARED,
    payload:{songID, content}
});

export const dislikeSong = (songID) => ({
    type:types.SONG_DISLIKED,
    payload:{songID}
});

export const createSong = (songID, songInfo) =>  ({
    type:types.SONG_CREATED,
    payload:{songID, songInfo}
})