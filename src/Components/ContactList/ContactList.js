import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ contactName, filtredValue, deleteContact }) {
  return (
    <ul className={s.list}>
      {contactName &&
        contactName
          .filter(contact =>
            contact.name.toLowerCase().trim().includes(filtredValue),
          )
          .map(({ id, name, number }) => (
            <li key={id} className={s.contact}>
              <p>{name}</p>: <span>{number}</span>
              <button
                className={s.delete}
                type="button"
                onClick={deleteContact}
              >
                Delete
              </button>
            </li>
          ))}
    </ul>
  );
}

ContactList.propTypes = {
  contactName: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  filtredValue: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
