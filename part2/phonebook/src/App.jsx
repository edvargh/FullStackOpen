import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons'
import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([]); 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setFilter] = useState('');

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
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewNumber('');
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
      <Persons persons={personsToShow} />
    </div>
  );
};

export default App;