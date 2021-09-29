import React, { useState } from 'react';
import './App.css';
import List from './components/List';

interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([])

  return (
    <div className="App">
      <h1>Guest List</h1>
      <List people={people} />
    </div>
  );
}

export default App;
