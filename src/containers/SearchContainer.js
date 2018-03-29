import './SearchContainer.css';
import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import { search } from '../BooksAPI';
import BookShelf from '../components/BookShelf';

class SearchContainer extends Component {
  state = {
    results: []
  };

  async searchBooks (query) {
    const results = await search(query);

    if (results.error) {
      this.setState({ results: [] });
      return;
    }

    this.setState({ results });
  }

  render () {
    return (
      <section className="SearchContainer">
        <SearchForm onSearch={(query) => this.searchBooks(query)} />
        <div className="SearchContainer__results">
          <BookShelf books={this.state.results} />
        </div>
      </section>
    );
  }
}

export default SearchContainer;
