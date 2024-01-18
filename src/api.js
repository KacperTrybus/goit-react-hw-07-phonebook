const BASE_URL = 'https://65a96503219bfa3718692c1f.mockapi.io/contacts';

export const fetchContacts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/contacts`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch Contacts Error:', error.message);
    throw error;
  }
};

export const addContact = async contact => {
  try {
    const response = await fetch(`${BASE_URL}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    });

    const data = await response.json();
    console.log('Add Contact Response:', data);

    return data;
  } catch (error) {
    console.error('Add Contact Error:', error);
    throw error;
  }
};

export const deleteContact = async id => {
  try {
    const response = await fetch(`${BASE_URL}/contacts/${id}`, {
      method: 'DELETE',
    });

    const data = await response.json();
    console.log('Delete Contact Response:', data);

    return data;
  } catch (error) {
    console.error('Delete Contact Error:', error);
    throw error;
  }
};
