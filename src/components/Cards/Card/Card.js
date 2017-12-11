import React from 'react';
import './Card.css';
import profile from '../../../../public/profile.png';

const Card = (props) => {
    return (
        <div className="card col-xs-2" onClick={props.clicked}>
            <img src={profile} alt="John" style={{ width: '70%' }} />
            <h1>{props.name}</h1>
            <p className="title">{props.designation}</p>
            <div style={{ margin: '20px 0' }}>
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-twitter"></a>
                <a href="#" className="fa fa-google"></a>
                <a href="#" className="fa fa-linkedin"></a>
            </div>
        </div>
    );
}
export default Card;