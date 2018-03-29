import './ShelvesContainer.css';
import { states } from '../Shelves';
import React, { Component } from 'react';
import BookShelf from '../components/BookShelf';
import { StoreConsumer } from '../Store';
import { Link } from 'react-router-dom'

class ShelvesContainer extends Component {
  getShelves (books) {
    const isValid = ([ shelf ]) => shelf !== 'none'
    return Object.entries(states).filter(isValid).map(
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
        <Link className="ShelvesContainer__button" to="/search" />
      </section>
    );
  }
}

export default ShelvesContainer;
