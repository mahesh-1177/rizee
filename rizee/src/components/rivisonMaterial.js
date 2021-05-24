import React from 'react';
import image7 from '../images/revision.png'
import '../css/rivisionMaterial.css'

function FourthPage() {
    return (
        <div class="container rivisionMaterial-main">
            <div class='rivisionMaterial-content'>
            <h1 class='rivisionMaterial-title'>Personalized Revision material For JEE & NEET</h1>
            <p class='rivisionMaterial-child-content'>Customised Practice Tests with instant solutions. Now practice from the chapters & topics based on your relative strengths & weaknesses with custom filters & settings</p>
            <button class="btn btn-primary rivision-material-btn">Free Demo</button>
            </div>
            <img src={image7} class="img-fluid rivisionMaterial-img" alt=""></img>
        </div>
    )
}

export default FourthPage;
