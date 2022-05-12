import React from 'react';
// import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ contactName, filtredValue, deleteContact }) {
  // console.log(contactName);
  // console.log(filtredValue);

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

// Section.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.node,
// };

export default ContactList;
