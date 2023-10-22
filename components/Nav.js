import React from 'react'
import Logo from "./Logo"
import SearchComponent from './SearchComponent'
import Hamburger from './Hamburger'
function Nav() {
  return (
<div className=' bg-stone-500 h-16 flex items-center  justify-between px-4 n fixed top-0 w-full'>
    <div >
        <label className='h-0'>
      <Logo/>
        </label>
    </div>
        <Hamburger/>
  {/* <SearchComponent/> */}
</div>
  )
}

export default Nav