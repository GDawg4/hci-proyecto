import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/navigation';

import inicio_white from '../../resources/inicio-white.svg';
import top_white from '../../resources/top-white.svg';
import biblioteca_white from '../../resources/biblioteca-white.svg';
import chat_white from '../../resources/chat-white.svg';
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

const Links = ({ selected, onSelect }) => (
    <Fragment>
        <Collapse>
            <List>
                <Item onClick={() => onSelect('feed')} className={selected === "feed" ? "first-item item selected" : "first-item item"}>
                    <Link to="/feed" className={"navbar-link"}>
                        <img src={inicio_white} width="45" height="45" alt="home"/>
                        <div className="section-name">Inicio</div>
                    </Link>
                </Item>    
                <Item onClick={() => onSelect('top')} className={selected === "top" ? "item selected" : "item"}>
                    <Link to="/top" className={"navbar-link"}>
                        <img src={top_white} width="45" height="45" alt="top"/>
                        <div className="section-name">Top</div>
                    </Link>
                </Item>
                <Item onClick={() => onSelect('biblioteca')} className={selected === "biblioteca" ? "item selected" : "item"}>
                    <Link to="/biblioteca" className={"navbar-link"}>
                        <img src={biblioteca_white} width="45" height="45" alt="biblioteca"/>   
                        <div className="section-name">Biblioteca</div>
                    </Link>
                </Item>
                <Item onClick={() => onSelect('chat')} className={selected === "chat" ? "item selected" : "item"}>
                    <Link to="/chat" className={"navbar-link"}>
                        <img src={chat_white} width="45" height="45" alt="chat"/>
                        <div className="section-name">Mensajes</div>
                    </Link>
                </Item>
                <Item onClick={() => onSelect('opciones')} className={selected === "opciones" ? "item selected" : "item"}>
                    <Link to="/opciones" className={"navbar-link"}>
                        <img src={opciones_white} width="45" height="45" alt="opciones"/>
                        <div className="section-name">Opciones</div>
                    </Link>
                </Item>
            </List>
        </Collapse>
    </Fragment>
)

export default connect(
    state => ({
        selected: selectors.getSelectedSection(state),
    }),
    dispatch => ({
        onSelect(selected){
            dispatch(actions.changeSection(selected))
        }
    }),
)(Links)