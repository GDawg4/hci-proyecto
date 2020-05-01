import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';

const MusicForm = ({handleSubmit}) => (
    <div>
        <form>
            <Field name ='toLook' component='text'/>
        </form>
    </div>
);

const search = reduxForm({form:'search'})(MusicForm);

export default search
