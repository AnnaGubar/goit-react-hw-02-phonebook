import React from 'react';
// import PropTypes from 'prop-types';
// import s from './Section.module.css';

function ContactList({ contactName }) {
  console.log(contactName);
  return (
    <ul>
      <li>{contactName}</li>
    </ul>
    // <ul>
    //   {contactName.map(({ name }) => (
    //     <li key={name}>{name}</li>
    //   ))}
    // </ul>
  );
}

// Section.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.node,
// };

export default ContactList;

// {
//   options.map(({ label, color }, index) => (
//     <button
//       key={label}
//       className={this.makeOptionClassName(index)}
//       style={{ backgroundColor: color }}
//       onClick={() => this.setActiveIdx(index)}
//     ></button>
//   ));
// }
