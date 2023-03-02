import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, postContact, removeContact } from 'services/api';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkApi) => {
    try {
      const contacts = await fetchContacts();

      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const contacts = await postContact(contact);

      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const contacts = await removeContact(id);

      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
