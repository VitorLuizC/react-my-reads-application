import './Book.css';
import React from 'react';
import ShelvesOptions from './ShelvesOptions';

function Book ({ book, shelf = 'none', image, title, subtitle }) {
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

      <ShelvesOptions book={book} shelf={shelf} />
    </div>
  );
}

export default Book;
