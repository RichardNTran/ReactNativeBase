import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import app from './reducers';
import dataSaga from './sagas/homeSagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(app, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(dataSaga);
  return store;
}
