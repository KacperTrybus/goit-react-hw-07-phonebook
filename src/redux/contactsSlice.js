import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';

export const fetchContactsAsync = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    return await api.fetchContacts();
  }
);

export const addContactAsync = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    return await api.addContact(contact);
  }
);

export const deleteContactAsync = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    return await api.deleteContact(id);
  }
);

export const initialState = {
  contacts: [],
  status: 'idle',
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContactsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contacts = action.payload;
      })
      .addCase(addContactAsync.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(deleteContactAsync.fulfilled, (state, action) => {
        const idToDelete = action.payload.id;
        state.contacts = state.contacts.filter(
          contact => contact.id !== idToDelete
        );
      });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
