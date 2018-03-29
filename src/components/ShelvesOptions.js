import './ShelvesOptions.css';
import { getOptions } from '../Shelves';
import React, { Component } from 'react';
import ShelfOption from './ShelfOption';

class ShelvesOptions extends Component {
  state = {
    isOpen: false,
    options: getOptions()
  };

  get className () {
    return `ShelvesOptions ${this.state.isOpen ? `ShelvesOptions--open` : ''}`
  }

  toggle () {
    this.setState((state) => ({
      ...state,
      isOpen: !state.isOpen
    }))
  }

  render () {
    return (
      <div className={this.className}>
        <button
          className="ShelvesOptions__button"
          onClick={() => this.toggle()}
        ></button>
        {
          this.state.isOpen && (
            <ul className="ShelvesOptions__options">
              {
                this.state.options.map((option) => (
                  <ShelfOption
                    key={option.value}
                    book={this.props.book}
                    label={option.label}
                    shelf={option.value}
                  />
                ))
              }
            </ul>
          )
        }
      </div>
    );
  }
}

export default ShelvesOptions;
