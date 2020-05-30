import React from "react";
import { Field, reduxForm, reset } from 'redux-form';
import isNil from 'lodash/isNil';

import './styles.css';
import default_image from "../../resources/default.svg";
import * as postActions from '../../actions/posts';

const NewPost = ({ handleSubmit }) => {
    return (
        <form onSubmit={ handleSubmit }>
            <div className='new-post'>
                <img alt="default-user" className='new-post-user' src={default_image}/>
                <div className= 'post-input'>
                    <Field name='newPostText' multiple={true} type='text' component='input' className='textarea' placeholder={'¿Qué estás pensando?'}/>
                    <div className='add-files'>
                        <button className='add nsong'>ADD SONG</button>
                        <button className='add other'>ADD ATTACHMENT</button>
                    </div>
                </div>
                <button className='submit-post' type='submit'>Publicar</button>
            </div>
        </form>
    )
}

const submit = (state, dispatch, { selectedUser, text, songInfo }) => {
    (isNil(text.values) || isNil(songInfo)) ?
        console.log('This is nothing ', text.values) :
        dispatch(postActions.publishPost(
            `${selectedUser.name} ${selectedUser.lastName}`, selectedUser.username, 0,
            text.values.newPostText, songInfo.cover, songInfo.songID))
    console.log(songInfo)
    dispatch(reset('newPost'))
}

const newPostForm = reduxForm({
    form: 'newPost',
    onSubmit: submit
})(NewPost);

export default (newPostForm)