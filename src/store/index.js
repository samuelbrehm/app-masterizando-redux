import { createStore, compose } from 'redux';

import reducer from './reducers/login';

const store = __DEV__
  ? createStore(reducer, compose(console.tron.createEnhancer()))
  : createStore(reducer);

export default store;
