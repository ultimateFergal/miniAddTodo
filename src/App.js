
import React, { Component } from 'react';
import Main from './containers/Main/Main';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default class App extends Component {
  render() {
    return (    
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider> );
  }
}
