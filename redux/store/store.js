import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import reducers from './rootReducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todos']
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
    }),
 });

export default store;


