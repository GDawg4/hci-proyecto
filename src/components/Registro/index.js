import React from 'react';
import { connect } from 'react-redux';

import RegistroForm from '../RegistroForm';

import './styles.css';
import * as authActions from '../../actions/auth';
import * as userActions from '../../actions/users';
import background from '../../resources/registro-background.jpg';
import logo from '../../resources/logo-blanco.png';

const Registro = ({ createUser }) => {
    return(
        <div>
            <div className="registro-image" background-image={background}>
                <div className="message-container">
                    <img src={logo} alt="logo" height="600" width="600" />
                    <div className="message">
                        Descubre la música más fresca
                    </div>
                </div>
                <div className="registro-container">
                    <div className="info-registro-container">
                        <RegistroForm onSubmit={createUser} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default connect(
    undefined,
    dispatch => ({
        test(a){
            console.log(a)
        },
        createUser(values){
            dispatch(authActions.completeAuth())
            dispatch(userActions.createUser(values.name, values.last_name, values.username, values.email, values.password))
        }
    })
)(Registro);