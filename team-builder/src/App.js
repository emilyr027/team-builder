import React, { useState } from 'react';
import Form from './Form';
import List from './List.js';
import './App.css';

const initFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [list, setList] = useState([]);
  const [formValues, setFormValues] = useState(initFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newTeammate = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if (!newTeammate.name || !newTeammate.email || !newTeammate.role){
      return
    }

    setList([...list, newTeammate])
    setFormValues(initFormValues)
  }

  return (
    <div className="App">
      <header className='App-header'>
        <Form updateForm={updateForm} submitForm={submitForm} values={formValues} setFormValues={setFormValues}/>
      </header>

      {
        list.map( item => {
          return (
            <List item={item} key={item.name} setFormValues={setFormValues}/>
          )
        })
      }
      </div>
  );
}

export default App;
