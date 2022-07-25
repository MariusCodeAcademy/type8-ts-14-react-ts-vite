import { useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './types/reminder';

const initReminders: Reminder[] = [
  { id: 1, title: 'Game on Sunday', isDone: false },
  { id: 2, title: 'Call about the House', isDone: true },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='container'>
      <ReminderList items={initReminders} />
    </div>
  );
}

export default App;
