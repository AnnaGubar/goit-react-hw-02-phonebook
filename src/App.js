import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Components/Section';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';
import ContactList from './Components/ContactList';

class App extends Component {
  // state = {
  //   name: '',
  //   number: '',
  //   contacts: [],
  //   filter: '',
  // };

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  // ContactForm
  updateStateApp = newName => {
    const contact = {
      id: nanoid(),
      name: newName.name,
      number: newName.number,
    };

    this.setState(({ contacts }) => ({
      name: newName.name,
      number: newName.number,
      contacts: [contact, ...contacts],
    }));
  };

  // Filter
  handleSearch = searchValue => {
    // console.log(searchValue.filter);

    // let x = this.state.contacts.filter(contact =>
    //   contact.name.includes(searchValue.filter),
    // );

    this.setState({
      filter: searchValue.filter,
      // contacts: [...x],
    });
  };

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
            updateStateApp={this.updateStateApp}
          />
        </Section>
        <Section title="Contacts">
          <Filter stateProps={this.state} handleSearch={this.handleSearch} />
          <ContactList
            contactName={this.state.contacts}
            filtredValue={this.state.filter}
          />
          {/* <ContactList contactName={this.handleSearch()} /> */}
        </Section>
      </>
    );
  }
}

export default App;
