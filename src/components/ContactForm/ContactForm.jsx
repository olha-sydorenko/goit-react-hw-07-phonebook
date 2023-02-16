import React from 'react';
import PropTypes from 'prop-types';

export class ContactForm extends React.Component {
  state = {
    name: '',
  };

  handleInputChange = event => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    this.setState({
      [inputName]: inputValue,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const contact = {
      name: this.state.name,
    };

    this.props.onAddContact(contact);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.handleInputChange}
            required
          />

          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
