import React from 'react';
import PerImg from '../images/performanceAnalysis.png';
import '../css/previousAnalysis.css';
import '../css/previousExams.css';

function PerformanceAnalysis() {
    return (
        <div class="container previousAnalysis-main">
            <img src={PerImg} class="img-fluid previousExam-img" alt=" "></img>
            <div class='previousExam-content'>
            <h2 class='previousExam-title'>Performance analysis</h2>
            <p class='previousExam-child-content'>Examine your strengths and weakness in a particular subject precisely with our AI powered performance tracker, find and improve your weak chapters and topics</p>
            <button class="btn btn-primary previousExam-btn">Explore</button>
            </div>
        </div>
    )
}

export default PerformanceAnalysis;
