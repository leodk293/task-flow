import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Facebook, Linkedin } from "lucide-react";

const Nav = () => {
  return (
    <header className="flex flex-wrap border border-transparent py-5 bg-black shadow justify-center gap-5  w-full fixed md:justify-evenly">
      <Link className=" text-3xl font-extrabold text-white" to={"/"}>
        <h1>Task-Flow</h1>
      </Link>

      {/* <ul className="flex flex-row self-center gap-2">
        <li className="border border-transparent p-1 bg-[#1DA1F2] rounded-[5px]">
          <a target="_blank" href="https://x.com/Aboubac48530295">
            <Twitter size={32} color="#ffffff" strokeWidth={2} />
          </a>
        </li>

        <li className="border border-transparent p-1 bg-[#1877F2] rounded-[5px]">
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100092315485742"
          >
            <Facebook size={32} color="#ffffff" strokeWidth={2} />
          </a>
        </li>

        <li className="border border-transparent p-1 bg-[#0A66C2] rounded-[5px]">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/aboubacar-traore-495736252/"
          >
            <Linkedin size={32} color="#ffffff" strokeWidth={2} />
          </a>
        </li>
        
      </ul> */}

      <ul className=" self-center text-xl font-semibold flex flex-wrap gap-3 text-white">
        <li>
          <a href="">Twitter</a>
        </li>
        <li>
          <a href="">Facebok</a>
        </li>
        <li>
          <a href="">Linkedin</a>
        </li>
      </ul>

      <button className="px-5 py-2 self-center border border-transparent text-xl font-semibold rounded-[50px] bg-red-700 text-white">
        Signin
      </button>
    </header>
  );
};

export default Nav;
