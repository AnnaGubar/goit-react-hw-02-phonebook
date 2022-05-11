import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  handleSubmit = e => {
    e.preventDefault();

    this.props.getFormresults({
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    });
  };

  render() {
    // console.log('child', this.state);
    // console.log('child', this.props);

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

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

// Form.propTypes = {
//   title: PropTypes.string,
//   children: PropTypes.node,
// };

export default ContactForm;
