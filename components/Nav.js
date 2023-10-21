import React from 'react'

function Nav() {
  return (
<div className='bg-stone-500 h-16 flex items-center justify-between px-4'>
    <div className='text-center'>
        <label className='h-0'>
            <a>
                logo
            </a>
        </label>
    </div>
    <button className='bg-stone-500 text-white px-4 py-2 rounded'>
        click
    </button>
</div>
  )
}

export default Nav