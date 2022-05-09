import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  // state = {
  //   name: '',
  // };

  handleSubmit = e => {
    e.preventDefault();

    // const enteredName = e.target.elements.name.value;

    // сохраняет введенное имя в текущий state
    // this.setState({ name: enteredName });

    // обьект с новым значением передаем в родительский state
    // this.props.getFormresults({ name: this.state.name });

    this.props.getFormresults({ name: e.target.elements.name.value });
  };

  render() {
    // console.log('child', this.state);
    // console.log('child', this.props);

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label>
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
