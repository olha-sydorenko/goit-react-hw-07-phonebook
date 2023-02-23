import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Container } from './Container/Container';

const currentContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const getCurrentContacts = () => {
    return JSON.parse(localStorage.getItem('contactsBase')) ?? currentContacts;
  };
  const [contacts, setContacts] = useState(getCurrentContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contactsBase', JSON.stringify(contacts));
  }, [contacts]);
  console.log(contacts);

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.some(
        contact => contact.name.toLowerCase().trim() === name.toLowerCase()
      )
    ) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }

    setContacts(contacts => [...contacts, contact]);
  };

  const deleteContact = contactId => {
    const newContacts = contacts.filter(contact => contact.id !== contactId);
    setContacts([...newContacts]);
  };

  const handleFilter = event => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm onAddContact={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onFilterChange={handleFilter} />
      <ContactList deleteContact={deleteContact} contacts={filteredContacts} />
    </Container>
  );
};
