import React from "react";
import './styles.css';
import './w3s.css';
import './normalize.css'

const mainContainer = (
    <div className='container'>
       {/* <button className='button1 round general'>+</button>
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
        <div className="alert">
            <span className="closebtn" onClick="this.parentElement.style.display='none';">&times;</span>
            This is an alert box.
        </div>
        <div className='vertical-div'>
            <div className='album image'></div>
            <div className='image-footer'>
                <div className='image-info'>
                    <div className='album-header'>Wide Awake</div>
                    <div className='album-info'>Parquet Courts</div>
                </div>
                <div className='more-actions image'>
                </div>
            </div>
        </div>
        <div className='end'/>*/}
        <div className="w3-sidebar w3-bar-block w3-black">
            <div className='logo'></div>
            <div className="w3-bar-item w3-button testfont first inicio image">Inicio</div>
            <div className="w3-bar-item w3-button testfont top image">Top</div>
            <div className="w3-bar-item w3-button testfont messages image">Mensajes</div>
            <div className="w3-bar-item w3-button testfont library image">Biblioteca</div>
            <div className="w3-bar-item w3-button testfont options image">Opciones</div>
        </div>
        <div>
            
        </div>
</div>);

export default mainContainer