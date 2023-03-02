import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List } from './ContactList.styled';

import { Contact } from 'components/Contact/Contact';
import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contactsSelector';
import { getContacts } from '../../operations/operations';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading in progress</p>}
      {error !== null && <p>Oops, some error occured... Message: {error}</p>}
      <List>
        {contacts?.length > 0 &&
          contacts.map(contact => {
            return <Contact key={contact.id} {...contact} />;
          })}
      </List>
    </>
  );
};
