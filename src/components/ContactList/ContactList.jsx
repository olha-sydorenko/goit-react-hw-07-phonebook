import React from 'react';
import { List } from './ContactList.styled';

import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(state =>
    state.contactsData.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(state.contactsData.filter.toLowerCase())
    )
  );

  return (
    <List>
      {contacts?.length > 0 &&
        contacts.map(contact => {
          return <Contact key={contact.id} {...contact} />;
        })}
    </List>
  );
};
