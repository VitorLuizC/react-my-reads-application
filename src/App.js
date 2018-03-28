import './App.css';
import { Route } from 'react-router-dom'
import React, { Component } from 'react';
import SearchContainer from './containers/SearchContainer';
import ShelvesContainer from './containers/ShelvesContainer';
import { getAll, update } from './BooksAPI';

class App extends Component {
  state = {
    books: []
  };

  async componentDidMount () {
    const books = await getAll();
    this.setState({ books });
  }

  async changeBookShelf({ bookID, shelf }) {
    await update(bookID, shelf);
    const book = this.state.books.find((book) => book.id === bookID);
    const books = this.state.books.filter((book) => book.id !== bookID);
    this.setState({
      books: [ ...books, { ...book, shelf } ]
    });
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={
          () => (
            <ShelvesContainer
              books={this.state.books}
              onChangeShelf={(params) => this.changeBookShelf(params)}
            />
          )}
        />

        <Route path="/search" component={
          () => (
            <SearchContainer
              books={this.state.books}
              onChangeShelf={(params) => this.changeBookShelf(params)}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
