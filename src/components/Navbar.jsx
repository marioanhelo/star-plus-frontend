import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<nav className="navbar">
          <div className="container flex flex-wrap items-center justify-flex-start mx-auto z-50">
            <a href="https://starplus.com/" className="flex items-center">
              <img
                src="https://static-assets.bamgrid.com/product/starplus/images/logo.770970996243b55d166fbeb8b1a52b36.svg"
                className="h-6 mr-3 sm:h-9"
              />
            </a>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="/"
                    className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white"
                  >Movies
                  </Link>
                </li>
                <li>
                    <Link
                        to="/create-movie"
                        className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >
                    New Movie
                    </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

  )
}

export default Navbar