import React from 'react';
import  image4 from '../images/pic.png';
import image5 from   '../images/For institutions.png';
import '../css/competitiveExams.css';
import exploreArrow  from  '../images/icons/keyboard_arrow_right_white_24dp.svg';

function CompetitiveExams() {
    return (
        <div class="container exam-main">
            <p class="exam-main-title">Become confident while focusing competitive exams</p>
                <div class="card-deck">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title exams-title">Rizee For <span class='title-jee'>JEE</span></h3>
                            <h5 class="exam-chid">Previous Papers Analysis</h5>
                            <h5 class="exam-chid">Practice</h5>
                            <h5 class="exam-chid">Performance Tracker</h5>
                        </div>
                            <img class="card-img-bottom exam-img" src={image4} alt="Card image cap" />
                            <h3 class="explore-title">Explore<img class="arrow" src={exploreArrow} /></h3>
                        </div>
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title exams-title">Rizee For <span class="title-neet">NEET</span></h3>
                            <h5 class="exam-chid">Previous Papers Analysis</h5>
                            <h5 class="exam-chid">Practice</h5>
                            <h5 class="exam-chid">Performance Tracker</h5>
                        </div>
                        <img class="card-img-top exam-img2" src={image5} alt="Card image cap" />
                        <h3 class="explore-title">Explore<img class="arrow" src={exploreArrow} /></h3>
                    </div>
                </div>
        
        </div>
    )
}

export default CompetitiveExams;
