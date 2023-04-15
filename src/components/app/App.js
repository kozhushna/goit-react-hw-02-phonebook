import './App.css';
import { Component } from 'react';
import ContactForm from 'components/contactForm';
// import Filter from 'components/filter';
import { ContactList } from 'components/contactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
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