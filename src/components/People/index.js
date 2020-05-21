import React from "react";
import Result from "../Result";
import { Link } from 'react-router-dom';

import './styles.css';
import play_icon from "../../resources/play-icon-orange.svg";
import {connect} from "react-redux";
import * as userActions from "../../actions/users";
import * as navActions from '../../actions/navigation'

import default_image from "../../resources/default.svg";

const People = ({ name, lastName, userID, select }) =>(
    <Link to={"/app/profile"}>
        <div className='result-wrapper' onClick={select}>
            <img className="result-image" alt="result" src= {default_image}  width={'75'} />
            <div className = 'result-info'>
                <div className = 'result-title'>
                    {`${name} ${lastName}`}
                </div>
            </div>
        </div>
    </Link>
)



export default connect(
    undefined,
    (dispatch, {userID})  => ({
        select(){
            dispatch(navActions.changeSection('profile'));
            dispatch(userActions.selectUser(userID))
        }
    })
)(People)