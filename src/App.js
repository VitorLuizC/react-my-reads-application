import './App.css';
import { Route } from 'react-router-dom'
import React, { Component } from 'react';
import SearchContainer from './containers/SearchContainer';
import ShelvesContainer from './containers/ShelvesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ShelvesContainer} />
        <Route path="/search" component={SearchContainer} />
      </div>
    );
  }
}

export default App;
