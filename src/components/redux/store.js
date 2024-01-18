import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const rootReducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
