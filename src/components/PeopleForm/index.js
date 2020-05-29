import React from "react";
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';

import './styles.css'
import * as selectors from '../../reducers'
import * as actions from "../../actions/users";

const PeopleForm = ({handleSubmit}) => (
    <div className='people-form-wrapper'>
        <form onSubmit={handleSubmit}>
            <div className="people-form">
                <Field name='peopleSearch' component='input' type='text' className = 'search-text-field same-line' placeholder='Busca personas'/>
                <button className='search-song same-line' type='submit'>Buscar</button>
            </div>
        </form>
    </div>
)

const submit = (state, dispatch, {allForms}) => {
    if (allForms.values){
        dispatch(actions.searchUser(allForms.values.peopleSearch))
    }else {
        console.log('Doesnt')
    }
}

const PeopleFormWrapped = reduxForm({
    form: 'searchPeople',
    onSubmit:submit
})(PeopleForm);

export default PeopleFormWrapped


