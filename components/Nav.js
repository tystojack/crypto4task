"use client";
import { useState } from "react";
import Logo from "./Logo";
import SearchComponent from "./SearchComponent";
import Hamburger from "./Hamburger";
function Nav() {
  const [open, setOpen] = useState(false);
  const StyleRender = () => {
    if (open === true) {
      return "animate-fadeIn";
    } else {
      return "animate-fadeOut pointer-events-none";
    }
  };
  const openDrawer = () => {
    return console.log(open, "opening the drawer");
  };
  console.log(open, "the open");
  return (
    <div className=" bg-black  h-16 flex items-center  justify-between pr-4 pl-2   fixed top-0 w-full">
      <div>
        <label className="h-0">
          <Logo />
        </label>
      </div>

      <Hamburger />
      {/* <div
        className={` ${StyleRender()} fixed w-screen h-screen top-0 right-0`}
      >
        <div className="fixed h-screen w-1/2 top-0 right-0 bg-black">hey</div>
      </div> */}
    </div>
  );
}

export default Nav;
