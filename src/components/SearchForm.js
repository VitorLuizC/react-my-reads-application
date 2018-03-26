import './SearchForm.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchForm extends Component {
  state = {
    query: ''
  };

  onSubmit (event) {
    event.preventDefault();
    const query = this.state.query;
    if (!query)
      return;
    this.props.onSearch && this.props.onSearch(query);
  }

  onUpdate (event) {
    const query = event.target.value;
    this.setState({ query });
  }

  render () {
    return (
      <form
        className="SearchForm"
        onSubmit={(event) => this.onSubmit(event)}
      >
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
      </form>
    );
  }
}

export default SearchForm;
