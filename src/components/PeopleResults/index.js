import React from "react";
import People from "../People";
import includes from 'lodash/includes'
import lowercase from 'lodash/lowerCase'

import { connect } from 'react-redux';
import * as selectors from '../../reducers';
import './styles.css';

const PeopleResults = ({ users, isEmpty, isActive }) => (
    <div className='results'>
        {
            users.length === 0 ? <p>{isActive ? '' : isEmpty ? '' : 'No hay resultados'} </p> :
                users.map(user => <People key={user.id} name = {user.name} lastName = {user.lastName} userID = {user.id} username={user.username}/>)
        }
    </div>
)

export default connect(
    (state) =>({
        users: selectors.getUsers(state).filter(user => user.id !== selectors.getSelectedUser(state) && (includes(lowercase(user.name), lowercase(selectors.getSearchedParameter(state))) || includes(lowercase(user.username), lowercase(selectors.getSearchedParameter(state)))))
    }),
    undefined
)(PeopleResults);
