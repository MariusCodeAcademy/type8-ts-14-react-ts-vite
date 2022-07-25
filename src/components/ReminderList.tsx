import React from 'react';
import Reminder from '../types/reminder';

interface ReminderListProps {
  items: Reminder[];
}

function ReminderList({ items }: ReminderListProps) {
  return (
    <div>
      <h2>ReminderList</h2>
      <ul>
        {items.map((item: Reminder) => (
          <li key={item.id}>
            {item.title} -- {item.isDone ? 'Complete' : 'Active'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReminderList;
