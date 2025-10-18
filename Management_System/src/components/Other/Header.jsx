import React from "react";
import { SiHey } from "react-icons/si";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 text-white shadow-md rounded-lg">
      {/* Left Side: Greeting */}
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-semibold flex items-center gap-2">
          Hi, Ahsan Azhar
          <SiHey className="text-yellow-400 text-xl" />
        </h1>
      </div>

      {/* Right Side: Logout Button */}
      <button className="bg-red-500 hover:bg-red-600 border border-zinc-200 px-4 py-1.5 rounded-md font-medium transition duration-300 cursor-pointer">
        Log out
      </button>
    </header>
  );
};

export default Header;
