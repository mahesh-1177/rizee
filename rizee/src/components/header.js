import React from 'react';
import logo from '/home/mahesh/Desktop/Rizee-App/rizee/src/images/Logo.png';
import '/home/mahesh/Desktop/Rizee-App/rizee/src/style.css';

function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="Rizee-logo" width="150" height="40" class="d-inline-block align-text-top" /></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                            <span class="navbar-toggler-icon"></span>
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
                                <li class="nav-item" id="login">
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
