import PropTypes from 'prop-types';
import React from 'react';
import { Contact } from 'components/Contact/Contact';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts?.length > 0 &&
        contacts.map(contact => {
          return <Contact key={contact.id} {...contact} />;
        })}
    </ul>
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
};
