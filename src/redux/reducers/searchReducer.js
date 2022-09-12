import { GET_JOBS } from "../actions";


const initialState = {
    content: [],
  };

  const searchReducers = (state = initialState, action) => {
    switch (action.type) {

        case GET_JOBS :
            return{
            ...state,
            content: action.payload
            }
  
      default:
        return state;
      // worst case scenario: torno lo stato come l'ho appena trovato
      // --> senza rompere niente
    }
  };
  
  export default searchReducers;