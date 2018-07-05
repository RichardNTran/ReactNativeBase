import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Router from './Router';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
export default App;
