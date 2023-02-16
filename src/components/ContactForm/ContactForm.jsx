import React from 'react';
import PropTypes from 'prop-types';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
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
      number: this.state.number,
    };

    this.props.onAddContact(contact);

    this.setState({
      name: '',
      number: '',
    });
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
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={this.handleInputChange}
            required
          />

          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
