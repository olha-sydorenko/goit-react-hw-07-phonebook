// import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Container } from './Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { appendContact, chooseContact } from 'redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(state => state.contactsData.contacts);
  const dispatch = useDispatch();
  // const getCurrentContacts = () => {
  //   return JSON.parse(localStorage.getItem('contactsBase')) ?? currentContacts;
  // };
  // const [contacts, setContacts] = useState(getCurrentContacts);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contactsBase', JSON.stringify(contacts));
  // }, [contacts]);
  // console.log(contacts);

  // const addContact = ({ name, number }) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   if (
  //     contacts.some(
  //       contact => contact.name.toLowerCase().trim() === name.toLowerCase()
  //     )
  //   ) {
  //     alert(`${contact.name} is already in contacts!`);
  //     return;
  //   }
  //   dispatch(appendContact(contact));
  // };

  // const handleFilter = event => {
  //   setFilter(event.target.value);
  // };

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  // );

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm />

      <h2>Contacts</h2>
      {/* <Filter value={filter} onFilterChange={handleFilter} /> */}
      {/* <ContactList deleteContact={deleteContact} contacts={filteredContacts} /> */}
      <ContactList contacts={contacts} />
    </Container>
  );
};
