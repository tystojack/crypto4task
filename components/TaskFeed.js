// TaskFeed.jsx
// TaskFeed.jsx
import React from 'react';
import TaskComponent from './TaskComponent';

const TaskFeed = () => {
  const tasks = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description for Task 1',
      cryptoAmount: '0.005 BTC',
      techRequired: 'Intermediate',
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description for Task 2',
      cryptoAmount: '0.01 BTC',
      techRequired: 'Advanced',
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Description for Task 3',
      cryptoAmount: '0.008 BTC',
      techRequired: 'Beginner',
    },
    {
      id: 4,
      title: 'Task 4',
      description: 'Description for Task 4',
      cryptoAmount: '0.012 BTC',
      techRequired: 'Intermediate',
    },
    // Add more task objects as needed
  ];

  return (
    <div className=' flex  flex-wrap items-center justify-center'>
      {tasks.map((task) => (
        <TaskComponent
          key={task.id}
          title={task.title}
          description={task.description}
          cryptoAmount={task.cryptoAmount}
          techRequired={task.techRequired}
        />
      ))}
    </div>
  );
};

export default TaskFeed;

