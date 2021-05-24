import React from 'react';
import image9 from '../images/mock tests.png';
import '../css/mockTest.css';
import '../css/rivisionMaterial.css';

function MockTest() {
    return (
        <div class="container mockTest-main">
            <div class='rivisionMaterial-content'>
            <h1 class='rivisionMaterial-title'> Mock tests designed for rapid study improvement</h1>
            <p class='rivisionMaterial-child-content'>Customised Practice Tests with instant solutions. Now practice from the chapters & topics based on your relative strengths & weaknesses with custom filters & settings</p>
            <button class="btn btn-primary rivision-material-btn">Free Demo</button>
            </div>
            <img src={image9} class="img-fluid rivisionMaterial-img" alt=""></img>
        </div>
    )
}

export default MockTest;
