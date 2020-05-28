import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/navigation';
import * as authActions from '../../actions/auth';
import * as userActions from '../../actions/users';

import inicio_white from '../../resources/inicio-white.svg';
import top_white from '../../resources/top-white.svg';
import biblioteca_white from '../../resources/biblioteca-white.svg';
import profile_white from '../../resources/profile.svg';
import opciones_white from '../../resources/opciones-white.svg';


const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})`
    padding-bottom: 32px;
`

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto,'
})`
    display: inline;
`

const Item = styled.div.attrs({
    className: 'collapse navbar-collapse'
})``

const Links = ({ selected, onSelect, logOut, selected_user }) => (
    <Fragment>
        <Collapse>
            <List>
                <Item onClick={() => onSelect('feed')} className={selected === "feed" ? "first-item item selected" : "first-item item"}>
                    <Link to="/app/feed" className={"navbar-link"}>
                        <img src={inicio_white} width="45" height="45" alt="home"/>
                        <div className="section-name">Inicio</div>
                    </Link>
                </Item>    
                <Item onClick={() => onSelect('top')} className={selected === "top" ? "item selected" : "item"}>
                    <Link to="/app/top" className={"navbar-link"}>
                        <img src={top_white} width="45" height="45" alt="top"/>
                        <div className="section-name">Top</div>
                    </Link>
                </Item>
                <Item onClick={() => onSelect('biblioteca')} className={selected === "biblioteca" ? "item selected" : "item"}>
                    <Link to="/app/biblioteca" className={"navbar-link"}>
                        <img src={biblioteca_white} width="45" height="45" alt="biblioteca"/>   
                        <div className="section-name">Biblioteca</div>
                    </Link>
                </Item>
                <Item onClick={() => onSelect('perfil', selected_user)} className={selected === "perfil" ? "item selected" : "item"}>
                    <Link to="/app/profile" className={"navbar-link"}>
                        <img src={profile_white} width="45" height="45" alt="chat"/>
                        <div className="section-name">Perfil</div>
                    </Link>
                </Item>
                <Item onClick={() => logOut()} className={selected === "logout" ? "item selected" : "item"}>
                    <Link to="/" className={"navbar-link"}>
                        <img src={opciones_white} width="45" height="45" alt="logout"/>
                        <div className="section-name">Log Out</div>
                    </Link>
                </Item>
            </List>
        </Collapse>
    </Fragment>
)

export default connect(
    state => ({
        selected: selectors.getSelectedSection(state),
        selected_user: selectors.getSelectedUser(state)
    }),
    dispatch => ({
        onSelect(selected, id = null){
            dispatch(actions.changeSection(selected))
            if(selected === 'perfil'){
                dispatch(userActions.seeUser(id))
            } 
        },
        logOut(){
            dispatch(authActions.logOut())
            dispatch(actions.changeSection('feed'))
        }
    }),
)(Links)