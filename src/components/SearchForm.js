import './SearchForm.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import debounce from 'debounce-promise';

class SearchForm extends Component {
  state = {
    query: '',
    isLoading: false
  };

  search = debounce(this.props.onSearch, 200);

  async onUpdate (event) {
    const query = event.target.value;
    this.setState({ query, isLoading: true });
    await this.search(query);
    this.setState({ isLoading: false });
  }

  render () {
    return (
      <form className="SearchForm">
        <Link className="SearchForm__link" to="/" />

        <div className="SearchForm__fieldset">
          <input
            className="SearchForm__field"
            type="text"
            value={this.state.query}
            placeholder="Pesquise por título ou autor"
            onChange={(event) => this.onUpdate(event)}
          />
        </div>

        {
          this.state.isLoading && (
            <figure className="SearchForm__loader"></figure>
          )
        }
      </form>
    );
  }
}

export default SearchForm;
