import { createStore } from 'redux';
import initialState from './initialState';
//import { legacy_createStore as createStore } from 'redux';
import shortid from 'shortid';

const reducer = (state, action) => {
  const dispatch = (action) => {
    state = reducer(state, action);
  };
  if (action.type === 'ADD_COLUMN') 
    return {
      ...state,
      columns: [...state.columns, { ...action.newColumn, id: shortid() }],
    };
  return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
