// questo file si occupa di creare lo store all'avvio dell'applicazione

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers"; // basta puntare la cartella
import favouritesReducers from "../reducers/favouritesReducers";
import searchReducers from "../reducers/searchReducer";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { persistStore, persistReducer } from "redux-persist";
// dove è contenuto il file index.js

const persistConfig = {
  key: "root", // il livello da cui vogliamo cominciare a far persistere i dati
  storage, // come dire --> storage: storage, seleziona lo storage engine da utilizzare
  transforms: [
    // elenco delle trasformazioni (plugin) applicabili a redux-persist
    encryptTransform({
      secretKey: "chiave",
    }),
  ],
};

const bigReducers = combineReducers({
  favourites: favouritesReducers,
  search: searchReducers,
});

const persistedReducer = persistReducer(persistConfig, bigReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // <-- lo spegne
    }),
});

export const persistor = persistStore(store);
