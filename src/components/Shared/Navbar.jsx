import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <nav className="px-2 py-5 flex items-center gap-3">
        <div className="md:hidden h-1 w-full bg-black"></div>
        <span className="text-3xl md:text-5xl font-bold">meteorerr</span>
        <div className="hidden md:flex h-1 w-full bg-black"></div>
        <div className="hidden md:flex md:static gap-2 items-center border-b-2 border-black md:border-0">
          <button className="btn btn-ghost btn-sm">login</button>/
          <button className="btn btn-ghost btn-sm">Signup</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
