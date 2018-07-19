import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { middleware } from './AppNavigator';
import app from './reducers';
import dataSaga from './sagas/homeSagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  logger,
  sagaMiddleware,
  middleware,
];
export default function configureStore() {
  const store = createStore(app, applyMiddleware(...middlewares));
  sagaMiddleware.run(dataSaga);
  return store;
}
