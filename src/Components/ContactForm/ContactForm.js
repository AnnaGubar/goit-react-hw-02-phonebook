import React, { Component } from 'react';
// import propTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  handleSubmit = e => {
    e.preventDefault();

    let enteredNameContact = e.target.elements.name;
    let enteredPnoneNumber = e.target.elements.number;

    this.props.updateAppContacts({
      name: enteredNameContact.value,
      number: enteredPnoneNumber.value,
    });

    enteredNameContact.value = '';
    enteredPnoneNumber.value = '';
  };

  render() {
    // console.group('🔅 PROPS');
    // console.log('parent', this.state);
    // console.log('parent', this.props);
    // console.groupEnd();

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.name}>
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter some name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            placeholder="Enter phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={s.submit} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

// ContactForm.propTypes = {
//   handleSubmit: propTypes.func,
// };

export default ContactForm;
