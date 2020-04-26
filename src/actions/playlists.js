import * as types from '../types/playlists'

export const likePlaylist = (playlistID) =>({
    type:types.PLAYLIST_LIKED,
    payload:{playlistID}
});

export const sharePlaylist = (playlistID, content) =>({
    types:types.PLAYLIST_SHARED,
    payload:{playlistID, content}
});

export const addSongToPlaylist = (playlistID, songID) => ({
    type:types.ADDED_SONG,
    payload:{playlistID, songID}
});

export const removeSongFromPlaylist = (playlistID, songID) => ({
    type:types.REMOVED_SONG,
    payload:{playlistID, songID}
});

