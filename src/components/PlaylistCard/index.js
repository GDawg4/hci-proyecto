import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const PlaylistCard = ({ id, pic, title, description }) => (
    <Link to={`/top/${id}`} className="playlist-link" >
        <div className="card-container" >
            <img alt="cover" src={pic} width='inherit' height='70%'/>
            <div className="card-content" >
                <p className="playlist-card-title">{title}</p>
                <p className="card-description">{description}</p>
            </div>
        </div>   
    </Link>
    
);

export default PlaylistCard;