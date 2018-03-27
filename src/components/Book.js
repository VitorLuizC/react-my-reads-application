import './Book.css';
import React from 'react';

function Book ({ image, title, subtitle, authors, status }) {
  return (
    <div className="Book">
      <figure className="Book__cover">
        <img className="Book__image" src={image} alt={title} />
      </figure>

      <h3 className="Book__title">{title}</h3>

      {
        subtitle && (
          <h4 className="Book__subtitle">{subtitle}</h4>
        )
      }
    </div>
  );
}

export default Book;
