import React from 'react';
import logo from '../images/Logo.png'; 
import '../css/header.css';
import toggler from '../images/icons/menu_white_24dp.svg';


function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark navbar-main fixed-top">
                <div class="container">
                    <a class="navbar-brand logo-link" href="#">
                        <img src={logo} alt="Rizee-logo"  class="d-inline-block align-text-top navbar-logo" /></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                            <span ><img class='toggle' src={toggler} /></span>
                        </button>
                        <div class="collapse navbar-collapse " id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Study Plans</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Vidoes</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">About Us</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Contact Us</a>
                                </li> 
                                <li class="nav-item login-link" id="login">
                                <a class="nav-link" href="#">Login</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Register</a>
                                </li>
                            </ul>
                        </div>
                </div>
            </nav>
        </div>
    )
}


export default Header
