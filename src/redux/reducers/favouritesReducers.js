import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions";

const initialState = {
  content: [],
};

const favouritesReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        content: state.content.filter(
          (dato) => dato._id !== action.payload
        ),
      };

    default:
      return state;
    // worst case scenario: torno lo stato come l'ho appena trovato
    // --> senza rompere niente
  }
};

export default favouritesReducers;
