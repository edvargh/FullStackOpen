import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';
import personService from './services/persons';


const App = () => {
  const [persons, setPersons] = useState([]); 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setFilter] = useState('');

  const hook = () => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  
  const addPerson = (event) => {
    event.preventDefault();
    const personExists = persons.some(person => person.name.toLowerCase() === newName.toLowerCase());
  
    if (personExists) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
      

      personService
      .create(newPerson)
      .then(response => {
        console.log(response)
        setPersons(persons.concat(newPerson));
        setNewName('');
        setNewNumber('');
      })
    }
  };

  const deletePerson = (id) => {
    if (window.confirm(`Are you sure you want to delete this entry?`)) {
      personService.remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
        })
        .catch(error => {
          console.error('Error deleting person:', error);
          alert('Failed to delete person');
        });
    }
  };

  const personsToShow = newFilter
    ? persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
    : persons;

    return (
      <div>
        <h2>Phonebook</h2>
        <Filter value={newFilter} onChange={handleFilterChange} />
        <h2>Add a new</h2>
        <PersonForm 
          addPerson={addPerson}
          newName={newName}
          handleNameChange={handleNameChange}
          newNumber={newNumber}
          handleNumberChange={handleNumberChange}
        />
        <h2>Numbers</h2>
        <Persons persons={personsToShow} onDelete={deletePerson} />
      </div>
    );
};

export default App;