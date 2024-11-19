import React from 'react'
import Button from '../button/Button';

const Cards = ({ cardTitle, cardDesc, cardLink = "/", buttonText }) => {
  return (
    <div className="card" style={{flex: '1 0 21%'}}>
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardDesc}</p>
        <Button linkText={buttonText} href={cardLink} />
      </div>
    </div>
  );
};

export default Cards