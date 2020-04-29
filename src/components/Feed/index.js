import React from 'react';
import { connect } from 'react-redux';
import './styles.css';
import * as selectors from '../../reducers';
import Post from '../Post';
import NavBar from '../NavBar';
import default_image from "../../resources/default.svg";
import * as postActions from '../../actions/posts'
import NewPost from "../NewPost";
import reverse from 'lodash/reverse'

const height = content => {
    const result = Math.ceil(content.length/64) * 27 + 148;
    return result;
}

const Feed = ({ posts, selectedUser}) => (
    <div>
        <NavBar />
        <div className="feed-container">
            <NewPost selectedUser = {selectedUser}/>
            {posts.length > 0 ? reverse(posts).map(post =>
                <Post key={post.id} index={post.id} height={height(post.content)} {...post}/>
            ) : <div className="default-message">NO HAY POSTS</div>}
        </div>
    </div>
)

export default connect(
    (state, {index}) => (
        {
        posts: selectors.getAllPosts(state),
        selectedUser: selectors.getUserById(state, selectors.getSelectedUser(state))
    }),
    undefined,
)(Feed);