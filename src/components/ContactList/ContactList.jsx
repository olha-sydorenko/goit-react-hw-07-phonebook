import PropTypes from 'prop-types';
import React from 'react';
import { Contact } from 'components/Contact/Contact';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
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
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      number: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func,
};
