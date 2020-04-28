import React from "react";
import './styles.css';

const mainContainer = (<div className='container'>
    <button className='button1 round general'>+</button>
    <button className='button1 with-text general'>Text here</button>
    <div className='div-generic'>
        <div className='user'>
            <div className='photo'></div>
        </div>
        <div className='info'>
            <div className='header'>Nombre de usuario</div>
            <div className='text'>Texto</div>
            <div className='footer'>
                <div className='likes'>609</div>
                <div className='share'>Share</div>
            </div>
        </div>
        <div className='content'></div>
    </div>
    <div className='search'>
        <input id='textSearch' type='text' className='searchBar'/>
        <button className='button1 searchButton'>GO!</button>
    </div>
    <div className='textboxes'>
        <label className="container2">One
            <input type="checkbox" checked="checked"/>
            <span className="checkmark"></span>
        </label>
        <label className="container2">Two
            <input type="checkbox" checked="checked"/>
            <span className="checkmark"></span>
        </label>
        <label className="container2">Three
            <input type="checkbox" checked="checked"/>
            <span className="checkmark"></span>
        </label>
    </div>
    <div className="dropdown">
        <button className="dropbtn">Dropdown</button>
        <div className="dropdown-content">
            <a>Link 1</a>
            <a>Link 2</a>
            <a>Link 3</a>
        </div>
    </div>
</div>);

export default mainContainer