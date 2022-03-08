import React from "react";
import {useNavigate, useMatch, useLocation} from 'react-router-dom';


import './menu-item.styles.scss';


const MenuItem = ({title, imageUrl, size, linkUrl}) => {
    
    let navigate = useNavigate();
    let loc = useLocation();
    let match = loc.pathname;

    return (
    <div className={`${size} menu-item`} onClick={()=> navigate (`${match}${linkUrl}`)}>
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`    
        }} /> 
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
    );
}



export default MenuItem;

