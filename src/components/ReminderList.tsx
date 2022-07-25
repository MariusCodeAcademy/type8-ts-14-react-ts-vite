import React from 'react';
import Reminder from '../types/reminder';
import ReminderStatus from './ReminderStatus';

interface ReminderListProps {
  items: Reminder[];
}

function ReminderList({ items }: ReminderListProps) {
  return (
    <div className='card mt-20'>
      <h2>ReminderList</h2>
      <ul>
        {items.map((item: Reminder) => (
          <li key={item.id}>
            {item.todo} --
            <ReminderStatus status={item.completed} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// prideti istrynimo mygtuka li viduje
// iskviesti paspaudimo metu funkcija aprasyta app.tsx

export default ReminderList;
