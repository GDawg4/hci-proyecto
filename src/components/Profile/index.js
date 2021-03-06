import React from "react";
import {connect} from 'react-redux'

import './styles.css'
import reverse from "lodash/reverse";
import Post from "../Post";
import * as selectors from "../../reducers";
import ProfileHeader from "../ProfileHeader";

const height = content => {
    const result = Math.ceil(content.length/50) * 27 + 148;
    return result;
}


const Profile = ({ name, posts, self_name, section }) => {
    const user = section === 'perfil' ? self_name : name

    return (
        <div className='profile-wrapper'>
            <div className='posts-person'>
                <ProfileHeader />
                {posts.filter(post => post.username === user).length === 0 ? <div className="no-posts-message">Este usuario no ha publicado</div> 
                    : 
                    reverse(posts).filter(post => post.username === user).map(post =>
                        <Post key={post.id} source={post.source} index={post.id} height={height(post.content)} {...post}/>
                    )
                }
            </div>
        </div>
    )
}

export default connect(
    (state)=>({
        posts: selectors.getAllPosts(state),
        name: (selectors.getUserById(state, selectors.getSeenUser(state))) ? selectors.getUserById(state, selectors.getSeenUser(state)).username : 'nel',
        self_name: selectors.getUserById(state, selectors.getSelectedUser(state)).username,
        section: selectors.getSelectedSection(state)
    })
    ,
    undefined
)(Profile)