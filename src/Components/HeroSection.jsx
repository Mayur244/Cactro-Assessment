import React from "react";
import { MoreHorizontal, Image, Heart } from "lucide-react";

function HeroSection() {
  return (
    <div className="min-h-screen bg-[#1b1a2e] text-white">
      <main className="flex-1 flex px-4 py-6 gap-8">
        {/* Left sidebar - empty in this view */}
        <div className="w-1/12"></div>
        <div className="mt-20">
          <button className="p-4 border border-white rounded-md">
            <Heart className="w-6 h-6 cursor-pointer hover:scale-125 hover:text-green-300 transition duration-300 ease-in-out" />
          </button>
        </div>

        {/* Center content */}
        <div className="w-7/12">
          <div className="flex justify-between items-center mb-2 text-sm text-gray-400">
            <div>110 Views • 4d</div>
            <button className="text-white cursor-pointer">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          <div className="bg-white rounded-md overflow-hidden">
            <img src="https://i.imgur.com/jBnPxjH.png" />
          </div>
        </div>

        {/* Right sidebar */}
        <div className="w-4/12">
          <div className="mb-4">
            <h2 className="text-sm font-bold tracking-wider mb-4">
              NEWEST IN MOST VIRAL
            </h2>
            <div className="h-80 overflow-y-auto pr-2 space-y-4">
              {/* Viral post 1 */}
              <div className="flex items-center gap-3 cursor-pointer">
                <div>
                  <img
                    className="h-18 w-18 object-cover rounded"
                    src="https://i.imgur.com/dH8HzH5_d.webp?maxwidth=128&shape=thumb"
                  />
                </div>
                <span className="font-medium">
                  You have no right to be this cool
                </span>
              </div>

              {/* Viral post 2 */}
              <div className="flex items-center gap-3 cursor-pointer">
                <div>
                  <img
                    className="h-18 w-18 object-cover rounded"
                    src="https://i.imgur.com/cnoTcTY_d.webp?maxwidth=128&shape=thumb"
                  />
                </div>
                <span className="font-medium">Very Happy Dog</span>
              </div>

              {/* Viral post 3 */}
              <div className="flex items-center gap-3 cursor-pointer">
                <div>
                  <img
                    className="h-18 w-18 object-cover rounded"
                    src="https://i.imgur.com/KeYYMfS_d.webp?maxwidth=128&shape=thumb"
                  />
                </div>
                <span className="font-medium">I'm not okay</span>
              </div>

              {/* Viral post 1 */}
              <div className="flex items-center gap-3 cursor-pointer">
                <div>
                  <img
                    className="h-18 w-18 object-cover rounded"
                    src="https://i.imgur.com/dH8HzH5_d.webp?maxwidth=128&shape=thumb"
                  />
                </div>
                <span className="font-medium">
                  You have no right to be this cool
                </span>
              </div>

              {/* Viral post 2 */}
              <div className="flex items-center gap-3 cursor-pointer">
                <div>
                  <img
                    className="h-18 w-18 object-cover rounded"
                    src="https://i.imgur.com/cnoTcTY_d.webp?maxwidth=128&shape=thumb"
                  />
                </div>
                <span className="font-medium">Very Happy Dog</span>
              </div>

              {/* Viral post 3 */}
              <div className="flex items-center gap-3 cursor-pointer">
                <div>
                  <img
                    className="h-18 w-18 object-cover rounded"
                    src="https://i.imgur.com/KeYYMfS_d.webp?maxwidth=128&shape=thumb"
                  />
                </div>
                <span className="font-medium">I'm not okay</span>
              </div>

              {/* Viral post 1 */}
              <div className="flex items-center gap-3 cursor-pointer">
                <div>
                  <img
                    className="h-18 w-18 object-cover rounded"
                    src="https://i.imgur.com/dH8HzH5_d.webp?maxwidth=128&shape=thumb"
                  />
                </div>
                <span className="font-medium">
                  You have no right to be this cool
                </span>
              </div>

              {/* Viral post 2 */}
              <div className="flex items-center gap-3 cursor-pointer">
                <div>
                  <img
                    className="h-18 w-18 object-cover rounded"
                    src="https://i.imgur.com/cnoTcTY_d.webp?maxwidth=128&shape=thumb"
                  />
                </div>
                <span className="font-medium">Very Happy Dog</span>
              </div>

              {/* Viral post 3 */}
              <div className="flex items-center gap-3 cursor-pointer">
                <div>
                  <img
                    className="h-18 w-18 object-cover rounded"
                    src="https://i.imgur.com/KeYYMfS_d.webp?maxwidth=128&shape=thumb"
                  />
                </div>
                <span className="font-medium">I'm not okay</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HeroSection;
