import React from 'react';
import { connect } from 'react-redux';
import Post from '../Post';
import NewPost from "../NewPost";

import './styles.css';
import * as selectors from '../../reducers';
import reverse from 'lodash/reverse';
import includes from 'lodash/includes'
// import MusicPlayer from "../MusicPlayer";


const height = content => {
    const result = Math.ceil(content.length/64) * 27 + 148;
    return result;
}

const Feed = ({ posts, selectedUser, text, songInfo, currentUser, allFollowing }) => (
    <div>
        <div className="feed-container">
            <NewPost selectedUser = {selectedUser} text = {text} songInfo = {songInfo}/>
            {posts.length > 0 ? reverse(posts).filter(post => includes(allFollowing, post.username)).map(post =>
                <Post key={post.id} source={post.source} index={post.id} height={height(post.content)} songID = {post.songID} {...post}/>
            ) : <div className="default-message">NO HAY POSTS</div>}
        </div>
        {/* <MusicPlayer/> */}
    </div>
)

export default connect(
    (state, {index}) => ({
        posts: selectors.getAllPosts(state),
        selectedUser: selectors.getUserById(state, selectors.getSelectedUser(state)),
        text: selectors.getFormsNewPost(state),
        songInfo: selectors.getCurrentlySelectedInfo(state),
        currentUser: selectors.getUserById(state, selectors.getSelectedUser(state)),
        allFollowing: selectors.getAllFollowing(state) === undefined ? null : selectors.getAllFollowing(state).map(user => selectors.getUserById(state, user).username)
    }),
    undefined,
)(Feed);