import React from "react";
import People from "../People";
import {connect} from 'react-redux'
import * as selectors from '../../reducers';


import './styles.css';

const PeopleResults = ({ users, isEmpty, isActive }) => (
    <div className='results'>
        {
            users.length === 0 ? <p>{isActive ? '' : isEmpty ? '' : 'No hay resultados'} </p> :
                users.map(user => <People name = {user.name} lastName = {user.lastName} userID = {user.id}/>)
        }
    </div>
)

export default connect(
    (state) =>({
        users:selectors.getUsers(state)
    }),
    undefined
)(PeopleResults);
