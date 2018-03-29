import React from 'react';
import './ShelfOption.css';
import { StoreConsumer } from '../Store';

function ShelfOption ({ book, label, shelf }) {
  const isActive = book.shelf === shelf
  const className = `ShelfOption ${isActive ? `ShelfOption--active` : ''}`

  return (
    <StoreConsumer>
      {
        ({ actions }) => (
          <li
            className={className}
            onClick={() => actions.setBookShelf(book, shelf)}
          >
            <span className="ShelfOption__label">{label}</span>
          </li>
        )
      }
    </StoreConsumer>
  );
}

export default ShelfOption;
