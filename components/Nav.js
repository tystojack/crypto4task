"use client";
import { useState } from "react";
import Logo from "./Logo";
import SearchComponent from "./SearchComponent";
import Link from 'next/link'
import Hamburger from "./Hamburger";
function Nav() {
  const [open, setOpen] = useState(false);
  const StyleRender = () => {
    if (open === true) {
      return "animate-slideIn";
    } else {
      return "animate-slideOut pointer-events-none";
    }
  };

  console.log(open, "the open");
  return (
    <div className=" bg-black  h-20 flex items-center  justify-between pr-4 pl-2   fixed top-0 w-full">
      <div>
        <label className="h-0">
          <Logo />
        </label>
      </div>

  <button onClick={()=> setOpen(true)} className="bg-green-500 p-1 rounded-md">

      <Hamburger />
  </button>

      <div onClick={()=> setOpen(false)}
        className={` ${StyleRender()}  fixed w-screen h-screen top-0 right-0`}
      >
      </div>
        <div className={`${StyleRender()} fixed h-screen w-1/2 top-0 right-0 bg-black flex items-center flex-col`}>
        <Link className="text-stone-100 p-4 text-2xl text-center" href="/maketask">Make Task</Link>
        <Link className="text-stone-100 p-4 text-2xl text-center" href="/about">About</Link>
        <Link className="text-stone-100 p-4 text-2xl text-center" href="/profile">Profile</Link>
        <Link className="text-stone-100 p-4 text-2xl text-center" href="/faq">FAQ</Link>
        <Link className="text-stone-100 p-4 text-2xl text-center" href="/termsofservice">Terms of Service</Link>
        </div>
    </div>
  );
}

export default Nav;
