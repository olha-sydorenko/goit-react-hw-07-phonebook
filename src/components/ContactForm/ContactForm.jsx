import React, { useState } from 'react';

import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { appendContact } from 'redux/contacts/contactsSlice';
import { Form, Label, Input, AddButton } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contactsData.contacts);
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const contact = {
    id: nanoid(),
    name,
    number,
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (
      contacts.some(
        contact => contact.name.toLowerCase().trim() === name.toLowerCase()
      )
    ) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }
    dispatch(appendContact(contact));
    setName('');
    setNumber('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleInputChange}
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleInputChange}
            required
          />
        </Label>

        <AddButton type="submit">Add contact</AddButton>
      </Form>
    </div>
  );
};
