import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
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
            <ContactListItem
              key={id}
              id={id}
              name={name}
              number={number}
              deleteContact={deleteContact}
            />
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
