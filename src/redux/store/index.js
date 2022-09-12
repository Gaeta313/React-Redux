// questo file si occupa di creare lo store all'avvio dell'applicazione

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers' // basta puntare la cartella
import favouritesReducers from '../reducers/favouritesReducers'
import searchReducers from '../reducers/searchReducer'
// dove è contenuto il file index.js

const bigReducers = combineReducers({
  favourites: favouritesReducers,
  search: searchReducers
})

const store = configureStore({
  reducer: bigReducers,
})

export default store
