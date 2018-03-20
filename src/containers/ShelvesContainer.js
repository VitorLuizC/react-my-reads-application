import React, { Component } from 'react';
import Button from '../components/Button';

class ShelvesContainer extends Component {
  render () {
    return (
      <section className="ShelvesContainer">
        <Button icon="add" link="/search">Add books</Button>
      </section>
    );
  }
}

export default ShelvesContainer;
