import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: (state, action) => {
      const { id, name, number } = action.payload;
      state.contacts.push({ id, name, number });
    },
    deleteContact: (state, action) => {
      const contactIdToDelete = action.payload;
      const indexToDelete = state.contacts.findIndex(
        contact => contact.id === contactIdToDelete
      );

      if (indexToDelete !== -1) {
        state.contacts.splice(indexToDelete, 1);
      }
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
