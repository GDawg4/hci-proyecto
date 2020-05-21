import React from "react";
import {connect} from 'react-redux'

import './styles.css'
import reverse from "lodash/reverse";
import Post from "../Post";
import * as selectors from "../../reducers";
import ProfileHeader from "../ProfileHeader";

const height = content => {
    const result = Math.ceil(content.length/64) * 27 + 148;
    return result;
}


const Profile = ({name, posts}) =>(
    <div className='profile-wrapper'>
        <div className='posts-person'>
            <ProfileHeader/>
            {posts.length > 0 ? reverse(posts).filter(post => post.username === name).map(post =>
                <Post key={post.id} source={post.source} index={post.id} height={height(post.content)} {...post}/>
            ) : <div className="default-message">Este usuario no ha publicado</div>}
        </div>
    </div>
)

export default connect(
    (state)=>({
        posts:selectors.getAllPosts(state),
        name: (selectors.getUserById(state, selectors.getSeenUser(state))) ? selectors.getUserById(state, selectors.getSeenUser(state)).username : 'nel'
    })
    ,
    undefined
)(Profile)