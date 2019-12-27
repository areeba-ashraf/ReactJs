import React from 'react';

function Card2(props){
    return(
        <div className="body">
            <h1 className="maintext">This is complete body</h1>
            <h2>{props.invite}</h2>
        </div>
    );
}
export default Card2;