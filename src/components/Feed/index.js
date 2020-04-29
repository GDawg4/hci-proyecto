import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import Post from '../Post';
import NavBar from '../NavBar';

const height = content => {
    const result = Math.ceil(content.length/64) * 27 + 148;
    return result;
}

const Feed = ({ posts }) => (
    <div>
        <NavBar />
        <div className="feed-container">
            {posts.length > 0 ? posts.map(post => 
                <Post key={post.id} height={height(post.content)} {...post} />
            ) : <div className="default-message">NO HAY POSTS</div>}
        </div>
    </div>
)

export default connect(
    state => ({
        posts: selectors.getAllPosts(state),
    }),
    undefined,
)(Feed);