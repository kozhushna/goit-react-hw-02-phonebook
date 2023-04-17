import './App.css';
import { Component } from 'react';
import ContactForm from 'components/contactForm';
import Filter from 'components/filter';
import { ContactList } from 'components/contactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = ({ id, name, number }) => {
    const { contacts } = this.state;
    const isExists =
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      ) !== undefined;

    if (isExists) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(({ contacts }) => {
      const newContacts = [...contacts];
      newContacts.push({
        id: id,
        name: name,
        number: number,
      });
      return { contacts: newContacts };
    });
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(c => c.id !== id),
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter } = this.state;

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onAddNewContact={this.addNewContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.getVisibleContacts()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
