import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import { search } from '../BooksAPI';
import BookShelf from '../components/BookShelf';

class SearchContainer extends Component {
  state = {
    books: []
  };

  async searchBooks (query) {
    const books = await search(query);

    if (books.error) {
      this.setState({ books: [] });
      return;
    }

    this.setState({ books });
  }

  render () {
    return (
      <section className="SearchContainer">
        <SearchForm onSearch={(query) => this.searchBooks(query)} />
        <BookShelf books={this.state.books} />
      </section>
    );
  }
}

export default SearchContainer;
