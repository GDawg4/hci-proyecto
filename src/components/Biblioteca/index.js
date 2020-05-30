import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import reverse from 'lodash/reverse';
import filter from 'lodash/filter'

import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Post from '../Post';
import Song from '../Song'
import './styles.css';
import * as selectors from '../../reducers';
import * as songActions from '../../actions/songs';


const apiCall = (type, searchTerm) =>{
    const getIDWithInfo = `https://api.deezer.com/${type}/${searchTerm}`;
    const corsURLID = `https://cors-anywhere.herokuapp.com/${getIDWithInfo}`;
    const axios = require('axios').default;
    return axios.get(corsURLID)
}


const height = content => {
    const result = Math.ceil(content.length/64) * 27 + 148;
    return result;
}


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    color: '#f59320',
  },
});

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f59320',
        }
    }
})

const Biblioteca = ({ posts, songs, songsWithInfo, songsConverted, findAllSongs }) => {
    const classes = useStyles();
    const [selectedTab, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div>
            {useEffect(findAllSongs, [])}
            <div className="bib-screen-container">
                <div className="bib-header-container">
                    
                </div>
                <Paper className={classes.root}>
                    <ThemeProvider theme={theme}>
                        <Tabs
                            value={selectedTab}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            theme={theme}
                            centered
                        >
                            <Tab label="Canciones" />
                            <Tab label="Posts" />
                        </Tabs>
                    </ThemeProvider>
                </Paper>
                <div className="bib-content-container">
                    { selectedTab === 0 ?
                        songsConverted.length > 0 ?
                            songsConverted.map(song => song.length !== 0 ? <Song title={song[0].title} artist={song[0].artist} album={song[0].album} cover={song[0].cover} songID={song[0].songID} />:
                                <Song title={song.title} artist={song.artist} album={song.album} cover={song.cover} songID={song.songID} />):
                            <div className="posts-error-message">Agrega más canciones</div> :
                        posts.length > 0 ? reverse(posts).map(post =>
                            <Post key={post.id} source={post.source} index={post.id} height={height(post.content)} {...post}/>) :
                            <div className="posts-error-message">No has dado like a ningun post</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default connect(
    state => ({
        posts: selectors.getAllPosts(state).filter(post => post.userLikes.includes(selectors.getSelectedUser(state))),
        songs: selectors.getSongsSaved(state)[selectors.getSelectedUser(state)],
        songsWithInfo: selectors.getAllSongs(state),
        songsConverted: selectors.getSongsSaved(state)[selectors.getSelectedUser(state)].map(song => filter(selectors.getAllSongs(state), songInfo => songInfo.songID === song))
    }),
    dispatch =>({
        findSong(songID, title, artist, duration, cover, album){
            dispatch(songActions.findSong(songID, title, artist, duration, cover, album))
        }
    }),
    (stateProps, dispatchProps)=>({
        posts:stateProps.posts,
        songs:stateProps.songs,
        songsWithInfo:stateProps.songsWithInfo,
        songsConverted:stateProps.songsConverted,
        findAllSongs(){
            stateProps.songs.map(song =>apiCall('track', song)
                .then(function (response) {
                    console.log(response.data)
                    dispatchProps.findSong(response.data.id, response.data.title, response.data.artist.name, response.data.duration, response.data.album.cover_medium ,response.data.album.title)
                    /*response.data.map(
                        song =>dispatchProps.findSong(song.id, song.title, song.artist.name, song.duration, song.album.cover_medium, song.album.title)
                    )*/
                })
            )
        }
    })
)(Biblioteca);