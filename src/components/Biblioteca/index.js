import React from 'react';
import { connect } from 'react-redux';
import reverse from 'lodash/reverse';

import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Post from '../Post';

import './styles.css';
import * as selectors from '../../reducers';


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

const Biblioteca = ({ posts, songs }) => {
    const classes = useStyles();
    const [selectedTab, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div>
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
                    { selectedTab === 0 ? songs.length > 0 ? 
                        songs.map(song => song) : <div className="posts-error-message">No has dado like a ninguna canción</div> : 
                        posts.length > 0 ? reverse(posts).map(post =>
                            <Post key={post.id} source={post.source} index={post.id} height={height(post.content)} {...post}/>
                        ) : <div className="posts-error-message">No has dado like a ningun post</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default connect(
    state => ({
        posts: selectors.getAllPosts(state).filter(post => post.userLikes.includes(selectors.getSelectedUser(state))),
        songs: [],
    })
)(Biblioteca);