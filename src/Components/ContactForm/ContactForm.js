import React, { Component } from 'react';
import propTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  // отслеживает инпуты формы
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.updateAppContacts(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
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
            placeholder="Enter some name"
            name="name" // для паттерна обновления state
            value={this.state.name} // для очистки инпута после submit
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            placeholder="Enter phone number"
            name="number" // для паттерна обновления state
            value={this.state.number} // для очистки инпута после submit
            onChange={this.handleChange}
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

ContactForm.propTypes = {
  handleSubmit: propTypes.func,
  name: propTypes.string,
  number: propTypes.number,
};

export default ContactForm;
