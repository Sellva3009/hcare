import React from 'react'
import Button from '../button/Button';

const Cards = ({ cardTitle, cardDesc, cardLink = "/", buttonText }) => {
  return (
    <div class="card" style={{flex: '1 0 21%'}}>
      <div class="card-body">
        <h5 class="card-title">{cardTitle}</h5>
        <p class="card-text">{cardDesc}</p>
        <Button linkText={buttonText} href={cardLink} />
      </div>
    </div>
  );
};

export default Cards