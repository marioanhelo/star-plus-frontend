import React from 'react'
import { Link } from 'react-router-dom'

const NavbarStar = () => {
  return (
    <nav className="navbar flex">
    <img src="https://static-assets.bamgrid.com/product/starplus/images/logo.770970996243b55d166fbeb8b1a52b36.svg" className="brand-logo"/>
    <ul className="nav-links">
        <li className="nav-items"><Link to="/home">INICIO</Link></li>
        <li className="nav-items"><Link to="/search">BÚSQUEDA</Link></li>
        <li className="nav-items"><Link to="/my-list">MI LISTA</Link></li>
        <li className="nav-items"><a href="#">ESPN</a></li>
        <li className="nav-items"><a href="#">PELÍCULAS</a></li>
        <li className="nav-items"><a href="#">SERIES</a></li>
        <li className="nav-items">
            <Link to="/create-movie" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Agregar Película
            </Link></li>
    </ul>

    <div className="right-container ">
        <a href="#" className="login-link">Mi Perfil</a>
    </div>
</nav>
  )
}

export default NavbarStar