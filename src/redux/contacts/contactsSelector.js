import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/Filter/filterSelector';

export const selectContacts = state => state.contactsData.contacts;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase())
    );
  }
);
export const selectIsLoading = state => state.contactsData.isLoading;
export const selectError = state => state.contactsData.error;
