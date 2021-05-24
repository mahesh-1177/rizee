import React from 'react';
import image8 from '../images/Linkage chapter analysis.png';
import '../css/linkageChapter.css';
import '../css/previousExams.css';
function LinkageChapter() {
    return (
        <div class="container linkageChapter-main">
            <img src={image8} class="img-fluid previousExam-img" alt=""></img>
            <div class='previousExam-content'>
            <h2 class='previousExam-title'>Linkage chapter analysis</h2>
            <p class='previousExam-child-content'>Understand how similar chapters are linked together and discover how their weightage is distributed with just one click.</p>
            <button class="btn btn-primary previousExam-btn">Free Demo</button>
            </div>
        </div>
    )
}

export default LinkageChapter;
