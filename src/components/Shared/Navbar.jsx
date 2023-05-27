import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    // <section className="relative z-10">
    //   <nav className="nav flex justify-between bg-yellow-500 h-40 px-5 py-2">
    //     <h2 className="text-2xl font-bold text-white">meteorerr</h2>

    //     <div className="p-2">
    //       <ul className="text-white flex gap-2 uppercase font-bold">
    //         <li>Home</li>|<li>Projects</li>|<li>About</li>|<li>Contact</li>
    //       </ul>
    //     </div>
    //   </nav>
    //   <div className="absolute left-0 flex top-16 font-bold  text-xl p-1 text-[#55070e]">
    //     <div className="flex space-x-2 md:space-x-5">
    //       <FaGithubSquare />
    //       <FaLinkedin />
    //       <MdEmail />
    //     </div>
    //   </div>
    // </section>
    <>
      <nav className="px-2 py-5 flex items-center gap-3">
        <span className="text-4xl font-bold">meteorerr</span>
        <div className="h-1 w-full bg-black"></div>
        <div className="flex gap-2 items-center">
          <button className="btn btn-ghost btn-sm">login</button>/
          <button className="btn btn-ghost btn-sm">Signin</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
