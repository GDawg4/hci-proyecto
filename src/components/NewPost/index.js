import default_image from "../../resources/default.svg";
import React from "react";
import * as postActions from '../../actions/posts'
import {connect} from "react-redux";

const NewPost = ({post}) => (
    <li>
        <div className='new-post'>
            <img className= 'new-post-user' src={default_image}/>
            <div className= 'post-input'>
                <input type='text' className='textarea'/>
                <div className='add-files'>
                    <button className='add nsong'>+</button>
                    <button className='add other'>X</button>
                </div>
            </div>
            <button className='submit-post' onClick={post}>Publicar</button>
        </div>
    </li>
    )

export default connect(
    undefined,
    (dispatch, {selectedUser}) => ({
        post(){
            console.log(selectedUser)
            dispatch(postActions.publishPost(selectedUser.name, selectedUser.username, 0, 'Test'))
        }
    })
)(NewPost)