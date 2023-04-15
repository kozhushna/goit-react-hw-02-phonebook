import './App.css';
import { Component } from 'react';
import ContactForm from 'components/contactForm';
// import Filter from 'components/filter';
import { ContactList } from 'components/contactList';

class App extends Component {
  state = {
    contacts: [],
    // name: '',
  };

  addNewContact = ({ id, name, number }) => {
    const { contacts } = this.state;
    const newContacts = [...contacts];
    newContacts.push({ id: id, name: name, number: number });
    this.setState({ contacts: newContacts });
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onAddNewContact={this.addNewContact} />

        <h2>Contacts</h2>

        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
