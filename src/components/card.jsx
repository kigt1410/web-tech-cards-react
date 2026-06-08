import React from 'react';
import '../styles/card.css';

export function Card(props){
  return(
    <div className="card-container">
      <img 
        className = "card-image" 
        src = {require(`../assets/${props.title.toLowerCase().replace(/\s+/g, '-')}.png`)}
        alt = {`${props.title} image`}
      />

      <div className="card-content">
        <h3 className="card-heading"><a href={`https://www.w3schools.com/${props.technology}/default.asp`} target="_blank" rel="noopener noreferrer">{props.title}</a></h3>
        <p className="card-title"><strong>{props.subtitle}</strong></p>
        <p className="card-description">{props.description}</p>  
      </div>

    </div>
  );
}