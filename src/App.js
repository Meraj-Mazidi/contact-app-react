import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import "./App.css";
import './ResponsiveStyles.css'
import Header from "./Components/Header";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: nanoid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='App'>
      <Header />
      <main>
        <div className='left-container'>
          <AddContact addContactHandler={addContactHandler} />
        </div>
        <div className='right-container'>
          <ContactList contacts={contacts} getContactId={removeContactHandler} />
          {contacts.length === 0 &&
            <div className="empty-list-container">
              <h2>No Contact Here!</h2>
            </div>}
        </div>
      </main >
    </div >
  );
}

export default App;
// 980px down