import React from 'react';
import { List } from './ContactList.styled';
import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts?.length > 0 &&
        contacts.map(contact => {
          return (
            <Contact
              key={contact.id}
              deleteContact={deleteContact}
              {...contact}
            />
          );
        })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func,
};
