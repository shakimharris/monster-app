import React from 'react';
import './card-list.styles.css';

export const CardList = props => {
    return (<div className="card-list">
    {props.monster.map(monster => (
        <h1> {monster.name} </h1> ))}</div>)
}