import React from 'react';
// import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ contactName, filtredValue }) {
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
            <li key={id}>
              {name}: {number}
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
