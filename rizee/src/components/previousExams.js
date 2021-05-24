import React from 'react';
import image6 from '../images/previous papers analysis.png';
import '../css/previousExams.css';

function PreviousExams() {
    return (
        <div class="container previousExam-main">
            <img src={image6} class="img-fluid previousExam-img" alt=""></img>
                <div class='previousExam-content'>
                    <h2 class='previousExam-title'>Complete analysis of previous exams</h2>
                    <p class='previousExam-child-content'>Plan your exam preparation with a special focus on Important Chapters & Topics Based on Rizee's Exclusive Previous Year Paper Analysis feature</p>
                    <button class="btn btn-primary previousExam-btn">Free Demo</button>
                </div>
        </div>
    )
}

export default PreviousExams;
