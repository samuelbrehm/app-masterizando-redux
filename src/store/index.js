import { createStore, compose } from 'redux';

import todos from './reducers/todos';

// const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
const store = __DEV__
  ? createStore(todos, compose(console.tron.createEnhancer()))
  : createStore(todos);

export default store;
