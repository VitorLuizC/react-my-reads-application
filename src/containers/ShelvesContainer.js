import { states } from '../Shelves';
import React, { Component } from 'react';
import BookShelf from '../components/BookShelf';
import { StoreConsumer } from '../Store';

class ShelvesContainer extends Component {
  getShelves (books) {
    return Object.entries(states).map(
      ([ shelf, title ]) => ({
        title,
        books: books.filter((book) => book.shelf === shelf)
      })
    );
  }

  render () {
    return (
      <section className="ShelvesContainer">
        <StoreConsumer>{
          ({ state }) => (
            this.getShelves(state.books).map((shelf) => (
              <BookShelf
                key={shelf.title}
                title={shelf.title}
                books={shelf.books}
              />
            ))
          )}
        </StoreConsumer>
      </section>
    );
  }
}

export default ShelvesContainer;
