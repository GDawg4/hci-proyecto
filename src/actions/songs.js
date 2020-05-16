import * as types from '../types/songs'

export const findSong = (songID, title, artist, duration, cover, album) => ({
    type:types.SONG_FOUND,
    payload: {
        songID,
        title,
        artist,
        duration,
        cover,
        album,
    }
})

export const clearSong = () =>({
    type:types.SONG_CLEARED,
})

export const selectSong = (songID) =>({
    type:types.SONG_SELECTED,
    payload:{selected:songID}
})

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
    type:types.SONG_FOUND,
    payload:{songID, songInfo}
})