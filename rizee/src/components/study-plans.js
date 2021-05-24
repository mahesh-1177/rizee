import React from 'react';
import '../css/study-plan.css';
import image1 from '../images/Size-Reduce/Self Study plan.png';
import image2 from '../images/Size-Reduce/Free.png';
import image3 from '../images/Group 3428.png';
import arrowBtn from '../images/icons/keyboard_arrow_right_white_24dp.svg';

function StudyPlans() {
    return (
        <div class='container study-plans '>   
            <p class="study-title text-center">Enhance your learning with our study plans</p>
                <div class="card-deck">
                    <div class="card study-card">
                        <img class="card-img-top" src={image1} alt="Card image cap" />
                            <div class="card-body study-card-body">
                                <h5 class="card-title study-plan">Self Study Plan</h5>
                                <p class="card-text study-text">A lite study plan designed for students with long term study goals</p>
                                <p class='card-bottom'>Explore <button class='arrow-btn'><img  src={arrowBtn} /></button></p>
                            </div>
                    </div>
                    <div class="card study-card">
                        <img class="card-img-top" src={image2} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title study-plan">Crash Course</h5>
                                <p class="card-text study-text">Crack JEE and NEET with our free4 weeks exclusive course</p>
                                <p class='card-bottom'>Explore <button><img class='arrow-btn' src={arrowBtn} /></button></p>
                            </div>
                    </div>
                            <div class="card study-card">
                                <img class="card-img-top" src={image3} alt="Card image cap" /> 
                                    <div class="card-body">
                                        <h5 class="card-title study-plan">Mentorship Plan</h5>
                                        <p class="card-text study-text">Learn from expert personal mentor with all the benefits of self study plan</p>
                                        <p class='card-bottom'>Explore <button><img class='arrow-btn' src={arrowBtn} /></button></p>
                                    </div>
                    </div>
                </div>
        </div>
    )
}

export default StudyPlans;
