import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, handleDeleteContact }) => {
  const renderContacts = () =>
    contacts.map(contact => (
      <li key={contact.id} className="contact">
        {contact.name}: {contact.number}
        <button type="button" onClick={() => handleDeleteContact(contact)}>
          Delete
        </button>
      </li>
    ));

  return (
    <div>
      <h2>Contacts</h2>
      <ol>{renderContacts()}</ol>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
