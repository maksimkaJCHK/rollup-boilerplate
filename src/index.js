import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import DogExample from './components/dogExample';
import DogReducer from './store/reducers';
import dogSaga from './saga/dogSaga';

import './styles/style.scss';

const node = document.getElementById('app');

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  DogReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(dogSaga);

ReactDOM.render(
  <Provider store = { store } >
    <DogExample />
  </Provider>,
  node
)