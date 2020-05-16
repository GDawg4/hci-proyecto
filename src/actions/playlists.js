import * as types from '../types/playlists'

export const likePlaylist = playlistId =>({
    type:types.PLAYLIST_LIKED,
    payload:{
        playlistId
    }
});

export const sharePlaylist = (playlistId, content) =>({
    types: types.PLAYLIST_SHARED,
    payload: {
        playlistId, 
        content
    }
});

export const addSongToPlaylist = (playlistId, songId) => ({
    type: types.PLAYLIST_SONG_ADDED,
    payload:{
        playlistId,
        songId
    }
});

export const removeSongFromPlaylist = (playlistId, songId) => ({
    type: types.PLAYLIST_SONG_REMOVED,
    payload: {
        playlistId, 
        songId
    }
});

export const selectPlaylist = playlistId => ({
    type: types.PLAYLIST_SELECTED,
    payload: {
        playlistId,
    }
})