import React from "react";
import { ChevronRight } from "lucide-react";

function Navbar() {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-950 font-bold">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold text-white cursor-pointer">imgur</h1>
        <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded flex cursor-pointer items-center gap-1">
          + New post
        </button>
        <button className="bg-pink-500 hover:bg-pink-600 text-white cursor-pointer px-3 py-1.5 rounded flex items-center gap-1">
          <span>🎭</span> Make a Meme
        </button>
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded flex items-center cursor-pointer">
        Next <ChevronRight className="w-4 h-4 ml-1" />
      </button>
      <div className="flex items-center gap-4">
        <button className="text-white cursor-pointer">
          Sign in
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-1.5 rounded cursor-pointer">
          Sign up
        </button>
      </div>
    </header>
  );
}

export default Navbar;
