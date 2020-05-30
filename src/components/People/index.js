import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import './styles.css';
import * as userActions from "../../actions/users";
import * as navActions from '../../actions/navigation';

import default_image from "../../resources/default.svg";

const People = ({ name, lastName, userID, username, select }) =>(
    <div className='result-wrapper' onClick={select}>
        <img className="result-image" alt="result" src= {default_image}  width={'75'} />
        <div className = 'result-info'>
            <div className = 'result-title'>
                {`${name} ${lastName}`}
            </div>
            <div className='result-username'>
                {`@${username}`}
            </div>
        </div>
        <Link className="userlink" to={"/app/profile"}>VER</Link>
    </div>
)



export default connect(
    undefined,
    (dispatch, {userID})  => ({
        select(){
            dispatch(navActions.changeSection('profile'));
            dispatch(userActions.seeUser(userID))
        }
    })
)(People)