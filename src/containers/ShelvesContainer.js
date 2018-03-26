import React, { Component } from 'react';
import { getAll } from '../BooksAPI';

class ShelvesContainer extends Component {
  state = {
    books: [],
    isLoading: true
  };

  async componentDidMount () {
    const books = await getAll();
    this.setState({ books, isLoading: false });
  }

  render () {
    return (
      <section className="ShelvesContainer">
      </section>
    );
  }
}

export default ShelvesContainer;
