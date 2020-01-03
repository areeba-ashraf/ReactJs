import React from 'react';
import Timer from './timer.js';

export function Card2(props){
    return(
        <div className="body1">
            <h2>{props.invite}</h2>
        </div>
    );
}

export function Card3(props){
    return(
        <div className="body2">
            
            <h2>{props.invite}</h2>
        </div>
    );
}

export function Card4(props){
    return(
        <div className="body3">
            <h2>{props.invite}</h2>
        </div>
    );
}

export function Card5(props){
    return(
        <div className="body4">
            
            <h2>{props.invite}</h2>
        </div>
    );
}
