import React from 'react'
import logo from '../logo.svg';
import '../styles/WelcomePage.css'
import { Link as LinkRouter } from 'react-router-dom'

export default function welcomePage() {
    return (
        <container className="welcome-container">
            <video autoPlay loop muted>
                <source src="wallpaper_welcome.mp4" type="video/mp4"/>
            </video>
            <div className="welcome-content">
                <img src={'https://cdn-icons-png.flaticon.com/512/6195/6195676.png'} className="App-logo" alt="logo" />
                <div className='welcome-message'>
                    <h1>Bienvenido</h1>
                    <h3>********* texto bonito *********</h3>
                    <LinkRouter className='btn-welcome' to={'/home'}>Botón</LinkRouter>
                </div>
            </div>
        </container>
    )
}
