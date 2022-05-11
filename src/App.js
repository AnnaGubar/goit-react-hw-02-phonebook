import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Components/Section';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';

class App extends Component {
  state = {
    name: '',
    number: '',
    contacts: [],
    filter: '',
  };

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

  render() {
    // console.group('🔅 PROPS');
    // console.log('parent', this.state);
    // console.log('parent', this.props);
    // console.groupEnd();

    console.group('🔅 STATE');
    console.log(this.state);
    console.log('name', this.state.name);
    console.log('contacts', this.state.contacts);
    console.groupEnd();

    return (
      <>
        <Section title="Phonebook">
          <ContactForm
            stateProps={this.state}
            getFormresults={this.updateStateApp}
          />
        </Section>
        <Section title="Contacts">
          <ContactList contactName={this.state.contacts} />
        </Section>
      </>
    );
  }
}

export default App;
