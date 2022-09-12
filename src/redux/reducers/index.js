// qui andremo a definire la nostra funzione reducer
// il reducer prende lo stato attuale dell'app, controlla l'azione che è
// stata appena dispatchata e genere il nuovo stato dell'applicativo

import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions"

// ma da dove cominciamo? qual è lo stato iniziale?

const initialState = {
  favourites: {
    content: [],
  },
}

// il reducer è una PURE FUNCTION
// quindi non possiamo mutare i nostri parametri

const mainReducer = (state = initialState, action) => {
  // da questa funzione, in ogni possibile situazione
  // io devo restituire il NUOVO STATO dell'applicativo
  switch (action.type) {
      
    case ADD_TO_FAVOURITES:
      return{
        ...state,
        favourites:{
          ...state.favourites,
          content: [...state.favourites.content, action.payload]
        }
      }

      case REMOVE_FROM_FAVOURITES:
        return{
          ...state,
          favourites:{
            ...state.favourites,
            content: state.favourites.content.filter(dato => dato._id !== action.payload)
          }
        }
   /*  case 'ADD_TO_CART':
      return {
        ...state,
        cart: {
          ...state.cart,
          content: [...state.cart.content, action.payload],
          //   NON FARE!!! content: state.cart.content.push(action.payload)
          //   content: state.cart.content.concat(action.payload),
        },
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: {
          ...state.cart,
          content: state.cart.content.filter((book, i) => i !== action.payload),
          //   content: [
          //     ...state.cart.content.slice(0, action.payload),
          //     ...state.cart.content.slice(
          //       action.payload + 1,
          //       state.cart.content.length
          //     ),
          //   ],
        },
      } */

    default:
      return state
    // worst case scenario: torno lo stato come l'ho appena trovato
    // --> senza rompere niente
  }
}

export default mainReducer
