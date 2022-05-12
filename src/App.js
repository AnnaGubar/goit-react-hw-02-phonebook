import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Components/Section';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';
import ContactList from './Components/ContactList';

class App extends Component {
  state = {
    // name: '',
    // number: '',
    // contacts: [],
    filter: '',
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  // ContactForm
  updateAppContacts = newName => {
    const contact = {
      id: nanoid(),
      name: newName.name,
      number: newName.number,
    };

    this.handleUniqueListContacts(contact);
  };

  // Filter
  handleSearch = searchValue => {
    this.setState({
      filter: searchValue.filter,
    });
  };

  handleUniqueListContacts(contact) {
    this.setState(() => ({
      contacts: [contact, ...uniqueContacts],
    }));

    let uniqueContacts = this.state.contacts.filter(listContact => {
      if (listContact.name === contact.name) {
        alert(`${contact.name} is already in contacts.`);

        this.setState(() => ({
          contacts: [...uniqueContacts],
        }));
      }
      return listContact;
    });
  }

  render() {
    // console.group('🔅 STATE');
    // console.log(this.state);
    // console.log('name', this.state.name);
    // console.log('contacts', this.state.contacts);
    // console.groupEnd();

    return (
      <>
        <Section title="Phonebook">
          <ContactForm
            stateProps={this.state}
            updateAppContacts={this.updateAppContacts}
          />
        </Section>

        <Section title="Contacts">
          <Filter stateProps={this.state} handleSearch={this.handleSearch} />
          <ContactList
            contactName={this.state.contacts}
            filtredValue={this.state.filter}
          />
        </Section>
      </>
    );
  }
}

export default App;
