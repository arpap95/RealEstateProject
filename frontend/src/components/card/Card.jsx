import React from 'react';
import './card.css';

const Card = ({ title, description, price, imageUrl, link }) => {
  return (
    <div className="card mb-4 shadow-sm">
      {imageUrl && <img src={imageUrl} className="card-img-top" alt={title} />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {price && <p className="card-text"><strong>Price:</strong> ${price}</p>}
        <a href={link} className="btn btn-primary">
          View Details
        </a>
      </div>
    </div>
  );
};

export default Card;
