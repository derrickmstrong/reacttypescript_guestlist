import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {
  
  const initialPeople = [
    {
      name: 'Lebron James',
      age: 36,
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.pVPAT3G0Hzn_F242iFzK0wHaE7%26pid%3DApi&f=1',
      note: 'The G.O.A.T.',
    },
  ];

  const [people, setPeople] = useState<IState["people"]>(initialPeople)

  return (
    <div className="App">
      <h1>Guest List</h1>
      <List people={people} />
      <Form people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
