import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

const searchString = "";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [...state.columns, { ...action.payload, id: shortid() }]
      };
      case 'ADD_CARD':
        return {
          ...state,
          cards: [...state.cards, { ...action.payload, id: shortid() }]
        };
    default:
      return state;
      case 'UPDATE_SEARCHSTRING':
      return { ...state, searchString: action.payload };
  }
};


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;