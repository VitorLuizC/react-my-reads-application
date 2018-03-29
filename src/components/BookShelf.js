import './BookShelf.css';
import React from 'react';
import Book from './Book';

function BookShelf ({ books = [], title = '' }) {
  return (
    <div className="BookShelf">
      {
        title && (
          <h2 className="BookShelf__title">{title}</h2>
        )
      }

      <div className="BookShelf__books">
        {
          books.map((book) => (
            <Book
              key={book.id}
              book={book}
              image={book.imageLinks.thumbnail}
              title={book.title}
              subtitle={book.subtitle}
            />
          ))
        }
      </div>
    </div>
  );
}

export default BookShelf;
