import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from './auth/auth-slice';
import contactsSlice from './contacts/contacts-slice';
import filterSlice from './filter/filter-slice';

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice);

const rootReducer = combineReducers({
    auth: persistedAuthReducer,
    contacts: contactsSlice,
    filter: filterSlice,
});

export default rootReducer;

export const persistedReducer = persistReducer(persistConfig, rootReducer);