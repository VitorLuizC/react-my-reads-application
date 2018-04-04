import React from 'react';
import './ShelfOption.css';
import { StoreConsumer } from '../Store';

function ShelfOption ({ book, label, shelf }) {
  return (
    <StoreConsumer>{
        (store) => {
          const isActive = store.actions.isCurrentShelf(book.id, shelf)
          const onClick = () => store.actions.setBookShelf(book, shelf)
          const classNames = `ShelfOption ${isActive ? `ShelfOption--active` : ''}`
          return (
            <li
              className={classNames}
              onClick={onClick}
            >
              <span className="ShelfOption__label">{label}</span>
            </li>
          )
        }
      }
    </StoreConsumer>
  );
}

export default ShelfOption;
