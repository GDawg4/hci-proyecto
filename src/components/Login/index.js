import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as authActions from '../../actions/auth';
import * as userActions from '../../actions/users';

import welcome from '../../resources/welcome.jpg';
import logotipo from '../../resources/logotipo.svg';

const Login = ({ users, onAuth, isAuth }) => {
    const [username, changeUsername] = useState('');
    const [password, changePassword] = useState('');
    console.log("IS AUTH: ", isAuth)

    return(
        isAuth === 'COMPLETED' ? <Redirect to="/app/feed"/> : 
        <div className="login-container">
            <img src={welcome} className="welcome" alt="welcome-pic" />
            <div className="login-content">
                <img src={logotipo} className="logotipo" height="400" width="400" alt="TurnTableLogo" />
                <input
                    className="input-text username"
                    type="text"
                    placeholder="Usuario"
                    value={username}
                    onChange={e => changeUsername(e.target.value)}
                />
                <input  
                    className="input-text password"
                    type="password"
                    placeholder={'Contraseña'}
                    value={password}
                    onChange={e => changePassword(e.target.value)}
                />
                {/*eslint-disable-next-line*/}
                <button className="button" type="submit" onClick={() => users.filter(user => user.username === username && user.password === user.password).length > 0 ? onAuth(true, users.filter(user => user.username === username && user.password === user.password)[0].id) : onAuth(false)}>
                    {/*eslint-disable-next-line*/}
                    <Link to={username && password ? users.filter(user => user.username === username && user.password === user.password).length > 0 ? "/app/feed" : "" : ""} className="login-button-link">{'Iniciar sesión'}</Link>
                </button>
                <span className="to-registro">¿No tienes una cuenta? <Link to="/registro">Haz clic aquí para registrarte</Link></span>
                {isAuth === null ? '' : isAuth === "FAILED" ? 
                    <div className="alert">
                        Problemas con la autenticación. Nombre de usuario o contraseña incorrecta.
                    </div> : <div className="hidden"></div>} 
            </div>
        </div>
    )
}

export default connect(
    state => ({
        users: selectors.getUsers(state),
        isAuth: selectors.getAuth(state),
    }),
    dispatch => ({
        onAuth(completed, id = null){
            if (completed){ 
                dispatch(authActions.completeAuth())
                dispatch(userActions.selectUser(id))
            }
            else {
                dispatch(authActions.failAuth())
            }
        },
    })
)(Login);