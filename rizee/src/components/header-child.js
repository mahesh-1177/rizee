import React from 'react';
import '../css/header-child.css';
import arrow  from  '../images/icons/keyboard_arrow_right_white_24dp.svg';

function HeaderChild() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-warning  navbar-header-child">
                    <div class="navbar-nav header-child-links " >
                        <a class="nav-link" href="#">New</a>
                        <a class="nav-link" href="#">Crash Course</a>
                        <a class="nav-link" href="#">Explore<img class="arrow" src={arrow} /></a>
                    </div>
            </nav>
        </div>
    )
}
export default HeaderChild;