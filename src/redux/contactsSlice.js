import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    appendContact(state, action) {
      state.contacts.push(action.payload);
    },

    removeContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },

    chooseContact(state, action) {},
  },
});

export const { appendContact, removeContact, chooseContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
