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

  render () {
    return (
      <StoreProvider value={{
        state: this.state,
        actions: {
          setBookShelf: this.changeBookShelf.bind(this),
        }
      }}>
        {this.props.children}
      </StoreProvider>
    );
  }
}

export { StoreController, StoreConsumer };
