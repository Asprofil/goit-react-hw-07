import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <SearchBox />
      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
}

export default App;
