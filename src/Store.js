import React, { Component } from 'react';
import createContext from 'create-react-context';
import { getAll, update } from './BooksAPI';

const INITIAL_STATE = {
  books: [],
  isLoading: true
};

const {
  Provider: StoreProvider,
  Consumer: StoreConsumer
} = createContext({ ...INITIAL_STATE });

class StoreController extends Component {
  state = { ...INITIAL_STATE };

  async componentDidMount () {
    const books = await getAll();
    this.setState({
      books,
      isLoading: false
    });
  }

  /**
   * Altera a prateleira do livro.
   * @param {{ id: string, shelf: string }} params
   * @returns {Promise.<void>}
   */
  async changeBookShelf (book, shelf) {
    await update(book, shelf);

    const books = this.state.books.filter((_) => _.id !== book.id);

    this.setState({
      books: [ ...books, { ...book, shelf } ]
    });
  }

  /**
   * Check if book from state.books is equals shelf.
   * @param {string} bookID
   * @param {string} shelf
   * @returns {boolean}
   */
  isCurrentShelf (bookID, shelf) {
    const book = this.state.books.find((book) => book.id === bookID)
    const bookShelf = (book && book.shelf) || 'none'
    return shelf === bookShelf
  }

  render () {
    return (
      <StoreProvider value={{
        state: this.state,
        actions: {
          setBookShelf: this.changeBookShelf.bind(this),
          isCurrentShelf: this.isCurrentShelf.bind(this),
        }
      }}>
        {this.props.children}
      </StoreProvider>
    );
  }
}

export { StoreController, StoreConsumer };
