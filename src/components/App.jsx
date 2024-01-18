import React, { useEffect } from 'react';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import './app.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filterSlice';
import {
  addContactAsync,
  deleteContactAsync,
  fetchContactsAsync,
} from '../redux/contactsSlice';
const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts || []);
  const filter = useSelector(state => state.filter || '');

  useEffect(() => {
    dispatch(fetchContactsAsync());
  }, [dispatch]);

  const contactExists = newContact =>
    contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

  const handleAddContact = async newContact => {
    if (contactExists(newContact)) {
      alert('Contact already exists');
    } else {
      await dispatch(addContactAsync(newContact));
      await dispatch(fetchContactsAsync());
      console.log('Updated Contacts:', contacts);
    }
  };

  const handleDeleteContact = async deletedContact => {
    await dispatch(deleteContactAsync(deletedContact.id));
    await dispatch(fetchContactsAsync());
  };

  const handleFilterChange = filterValue => {
    dispatch(setFilter(filterValue));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="wrapper">
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter filter={contacts} handleFilterChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
