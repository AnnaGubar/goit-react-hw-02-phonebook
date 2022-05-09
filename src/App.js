import React, { Component } from 'react';
import Section from './Components/Section';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  // добавление имени
  getFormresults = newName => {
    this.setState({
      name: newName, // newName получает из дочернего ел.
    });
  };

  render() {
    // console.log('parent', this.state);
    // console.log('parent', this.props);
    console.log(this.state);
    console.log(this.state.name);
    return (
      <>
        <Section title="Phonebook">
          <ContactForm
            stateProps={this.state}
            getFormresults={this.getFormresults}
          />
        </Section>
        <Section title="Contacts">
          <ContactList contactName={'ggggggggg'} />
        </Section>
      </>
    );
  }
}

export default App;
