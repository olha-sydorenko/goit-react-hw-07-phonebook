import React from 'react';
import { nanoid } from 'nanoid';

import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = ({ name }) => {
    const contact = {
      id: nanoid(),
      name,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
    console.log(contact);
  };

  render() {
    return (
      <>
        <h3>Phonebook</h3>
        <ContactForm onAddContact={this.addContact} />

        <h3>Contacts</h3>
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}
