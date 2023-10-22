"use client"
import React from 'react';
function SearchComponent() {
  return (
    <div className=' flex justify-center p-4'>

    <div className='flex items-center'>
      <input
        type='text'
        placeholder='Search...'
        className='bg-white rounded p-2 mr-2 focus:outline-none'
        />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 text-gray-100 cursor-pointer'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M21 21l-6-6M9 2a7 7 0 110 14 7 7 0 010-14z'
        />
      </svg>
    </div>
          </div>
  );
}

export default SearchComponent;
