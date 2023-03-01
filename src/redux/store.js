import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './Filter/filterSlice';
const contactsReducerConfig = {
  key: 'user',
  storage,
};
const filterReducerConfig = {
  key: 'filter',
  storage,
  blacklist: 'filter',
};

export const store = configureStore({
  reducer: {
    contactsData: persistReducer(contactsReducerConfig, contactsReducer),
    filterData: persistReducer(filterReducerConfig, filterReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
