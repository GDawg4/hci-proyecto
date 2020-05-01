import default_image from "../../resources/default.svg";
import React from "react";
import * as postActions from '../../actions/posts'
import { Field, reduxForm, reset } from 'redux-form'
import isNil from 'lodash/isNil'

const NewPost = ({ handleSubmit }) => {
    return (
        <form onSubmit={ handleSubmit }>
            <div className='new-post'>
                <img className= 'new-post-user' src={default_image}/>
                <div className= 'post-input'>
                    <Field name='newPostText' type='text' component='input' className='textarea'/>
                    <label htmlFor='newPostText'>¿Qué estás pensando?</label>
                    <div className='add-files'>
                        <button className='add nsong'>+</button>
                        <button className='add other'>X</button>
                    </div>
                </div>
                <button className='submit-post' type='submit'>Publicar</button>
            </div>
        </form>)
}

const submit = (state, dispatch, {selectedUser, text}) => {
    isNil(text.newPost.values) ? console.log('This is nothing ', text.newPost.values) : dispatch(postActions.publishPost(selectedUser.name, selectedUser.username, 0, text.newPost.values.newPostText))
    dispatch(reset('newPost'))
}

const newPostForm = reduxForm({
    form: 'newPost',
    onSubmit: submit
})(NewPost);

export default (newPostForm)