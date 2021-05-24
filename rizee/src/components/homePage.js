import React from 'react';
import homeImage from '../images/Home Screen Image_Final 1(2).png';
import '../css/homepage.css';
import homeImage1 from '../images/Home Screen Image_Final 1(3).png';

function HomePage() {
    return (
        <div>
            <figure class="home-figure">
                <img src={homeImage} class="figure-img img-fluid rounded" alt="home-image" />
                    <figcaption class="figure-caption">
                        <h1 class="fig-caption-heading">Dream of Cracking <span class="text">JEE</span> and <span class="text">NEET</span>  Within Reach,Learn with <span class="text">Rizee !</span> </h1>
                        <p class='fig-caption-child'>An AI powered learning and progress tracking platform.</p>
                        <button class='btn fig-btn'>Try for Free</button>
                    </figcaption>
            </figure>
        </div>
    )
}

export  default HomePage;