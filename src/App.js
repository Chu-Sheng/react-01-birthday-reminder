import React, { useState } from 'react';
import data from './data.js';
import List from './List';
function App() {
  console.log(data)
  const [people, setPeople] = useState(data);
  console.log(people.length);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App

