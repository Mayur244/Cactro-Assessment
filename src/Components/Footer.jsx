import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="border-t border-gray-800 bg-gray-800 font-medium">
        <div className="flex justify-between items-center">
          <div className="flex items-center ml-10 gap-12 text-[13px] tracking-wider text-gray-300">
            <span>© 2025 Imgur, Inc</span>
            <a href="#">
              About
            </a>
            <a href="#">
              Terms
            </a>
            <a href="#">
              Privacy
            </a>
            <a href="#">
              Rules
            </a>
            <a href="#">
              Help
            </a>
            <a href="#">
              Emerald
            </a>
            <a href="#">
              Wellness
            </a>
            <a href="#">
              CCPA
            </a>
            <a href="#">
              EU DSA
            </a>
            <a href="#">
              Trending
            </a>
          </div>
          <button className="bg-gray-600 text-white p-4 rounded cursor-pointer">Get the App</button>
        </div>
      </footer>
    </div>
  )
}

export default Footer