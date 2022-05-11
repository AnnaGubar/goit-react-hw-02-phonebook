import React from 'react';
// import PropTypes from 'prop-types';
// import s from './Section.module.css';

function ContactList({ contactName }) {
  return (
    <ul>
      {contactName &&
        contactName.map(({ id, name, number }) => (
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
