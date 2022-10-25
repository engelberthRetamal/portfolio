import React from 'react'
import '../styles/Header.css'

export default function Header() {
    return (
        <header className='header'>
            <div>
                <a href="#">
                    <img src="" alt="logo_bonito"/>
                </a>
            </div>
            <nav>
                <ul className='nav-links'>
                    <li><a className='nav-link' href="#">Home</a></li>
                    <li><a className='nav-link' href="">Sobre mi</a></li>
                    <li><a className='nav-link' href="">proyectos</a></li>
                    <li><a className='nav-link' href="">Contactame</a></li>
                </ul>
            </nav>
        </header>
    )
}
