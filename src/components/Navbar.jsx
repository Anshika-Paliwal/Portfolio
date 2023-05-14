import { React, useState } from 'react'
import intro_pic from '../images/intro_pic.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
  return (
    <>
    <nav className="fixed top-0 w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-24">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-16 w-16 shadow-md rounded-full"
              src={intro_pic}
              alt="Logo"
            />
            <h1 className="ml-2 font-semibold text-black">Anshika Paliwal</h1>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-x-4">
              <a
                href="/home"
                className="active px-3 py-2 rounded-full text-sm font-medium text-black hover:text-white hover:bg-rose-600 focus:outline-none focus:text-white focus:bg-rose-600 transition ease-in-out"
              >
                Home
              </a>
              <a
                href="/about"
                className="px-3 py-2 rounded-full text-sm font-medium text-black hover:text-white hover:bg-rose-600 focus:outline-none focus:text-white focus:bg-rose-600 transition ease-in-out"
              >
                About
              </a>
              <a
                href="/skills"
                className="px-3 py-2 rounded-full text-sm font-medium text-black hover:text-white hover:bg-rose-600 focus:outline-none focus:text-white focus:bg-rose-600 transition ease-in-out"
              >
                Skills
              </a>
              <a
                href="/projects"
                className="px-3 py-2 rounded-full text-sm font-medium text-black hover:text-white hover:bg-rose-600 focus:outline-none focus:text-white focus:bg-rose-600 transition ease-in-out"
              >
                Projects
              </a>
              <a
                href="/experience"
                className="px-3 py-2 rounded-full text-sm font-medium text-black hover:text-white hover:bg-rose-600 focus:outline-none focus:text-white focus:bg-rose-600 transition ease-in-out"
              >
                Experience
              </a>
              <a
                href="/contact"
                className="px-3 py-2 rounded-full text-sm font-medium text-black hover:text-white hover:bg-rose-600 focus:outline-none focus:text-white focus:bg-rose-600 transition ease-in-out"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href ="/home"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-white hover:bg-rose-600 focus:outline-none focus:text-white focus:bg-rose-600"
            >
              Home
            </a>
            <a
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-white hover:bg-rose-600 focus:outline-none focus:text-white focus:bg-rose-600"
            >
              About
            </a>
            <a
              href="/skills"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-white hover:bg-rose-600 focus:outline-none focus:text-white focus:bg-rose-600"
            >
              Skills
            </a>
            <a
              href="/projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-white hover:bg-rose-600 focus:outline-none focus:text-white focus:bg-rose-600"
            >
              Projects
            </a>
            <a
              href="/experience"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-white hover:bg-rose-600 focus:outline-none focus:text-white focus:bg-rose-600"
            >
              Experience
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-white hover:bg-rose-600 focus:outline-none focus:text-white focus:bg-rose-600"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
    </>
  )
}

export default Navbar