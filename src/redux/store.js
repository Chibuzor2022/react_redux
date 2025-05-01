import { createStore } from 'redux';
import todoReducer from './reducers';

// Create Redux store with our reducer
const store = createStore(todoReducer);

export default store;