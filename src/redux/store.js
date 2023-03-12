import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

// export const getFilteredCards = ({ cards, searchString }, columnId) => cards
//   .filter(card => card.columnId === columnId && card.title.toLowerCase().includes(searchString.toLowerCase()));
// export const getFilteredCards = (state, columnId) => 
// state.cards.filter(card =>
//    card.columnId === columnId && card.title.toLowerCase().includes(state.searchString.toLowerCase()));

const defaultState = {
  initialState: initialState,
}

const reducer = (state = defaultState.initialState, action) => {
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
      case 'UPDATE_SEARCHSTRING':
      return { ...state, 
        searchString: action.payload };
      default:
        return state;
  }
};




const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;