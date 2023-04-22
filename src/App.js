import React from 'react';
import List from './List';

const items = [
  { text: 'Gaurav' },
  { text: 'Shubham' },
  { text: 'Abhinav' },
];

function App() {
  return (
    <div>
      <h1>My List</h1>
      <List items={items} />
    </div>
  );
}

export default App;
