import './App.css';
import React from 'react';
import { Route } from 'react-router-dom'
import { StoreController } from './Store';
import SearchContainer from './containers/SearchContainer';
import ShelvesContainer from './containers/ShelvesContainer';

function App () {
  return (
    <div className="App">
      <StoreController>
        <Route exact path="/" component={ShelvesContainer} />
        <Route path="/search" component={SearchContainer} />
      </StoreController>
    </div>
  );
}

export default App;
