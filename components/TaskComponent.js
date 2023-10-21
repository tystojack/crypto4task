// TaskComponent.jsx
import React from 'react';

const TaskComponent = ({ title, description, cryptoAmount, techRequired }) => {
  return (
    <div className='bg-gray-800 text-white shadow-lg rounded-lg p-4 mb-4 w-72 mx-2'>
      <div className='h-40 bg-gray-600 rounded-lg mb-4'></div> {/* Placeholder image */}
      <h2 className='text-xl font-semibold mb-2'>{title}</h2>
      <p className='text-gray-400 mb-2'>{description}</p>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <span className='text-green-400 mr-2'>{cryptoAmount}</span>
          <span className='text-sm text-gray-400'>Crypto</span>
        </div>
        <div className='flex items-center'>
          <span className='text-sm text-gray-400'>{techRequired}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskComponent;
