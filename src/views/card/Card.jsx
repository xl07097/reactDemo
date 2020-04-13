import React from 'react';
import './card.less';

function Card() {
    const date = new Date();
    const today = date.getDate();
    const calendar = date.toLocaleDateString();
    return (
        <div className="card">
            <div className="card-header">
                <h1>{today}</h1>
            </div>
            <div className="card-content">
                <p>{calendar}</p>
            </div>
        </div>
    );

}

export default Card;