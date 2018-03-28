import { states } from '../ReadState'
import React, { Component } from 'react';
import BookShelf from '../components/BookShelf'

class ShelvesContainer extends Component {
  get shelves () {
    return Object.entries(states).map(
      ([ shelf, title ]) => ({
        title,
        books: this.props.books.filter((book) => book.shelf === shelf)
      })
    );
  }

  render () {
    return (
      <section className="ShelvesContainer">
        {
          this.shelves.map((shelf) => (
            <BookShelf
              key={shelf.title}
              title={shelf.title}
              books={shelf.books}
            />
          ))
        }
      </section>
    );
  }
}

export default ShelvesContainer;
