import React from 'react';
import './ContentPanel.css';
import './Skills.css'

const Skills = React.forwardRef((props, ref)=>{

    return (
        <div className='box3'>
            <div className='content'>
                <div data-aos='fade-in' className='sectionHeader'>Skills</div>
                <div className='whiteSpace'></div>
            </div>
            <div className='moreSpace'></div>

            <ul class="timeline">
                <li>
                    <div class="direction-r">
                        <span class="time-wrapper" data-aos="fade-right"><span class="time">Dec 2014</span></span>
                        <div class="flag-wrapper" >
                            <span class="circ"data-aos="zoom-out"></span>
                            <span class="flag" >Web Dev/React</span>
                        </div>
                        <div class="desc" data-aos="fade-left" >From working at NCR and through school at GT, I have gained skills 
                        with React, CSS, HTML, jQuery, and JavaScript. </div>
                    </div>
                </li>

                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper">
                            <span class="circ" data-aos="zoom-out" ></span>
                            <span class="flag">App Dev/React Native</span>
                        </div>
                        <span class="time-wrapper" data-aos="fade-left"><span class="time">Dec 2014</span></span>
                    <div class="desc" data-aos="fade-right">This past semester I was working on a project in React Native for the Innovation Lab at NCR. 
                    While there, I built up my skills with JavaScript, redux, their APIs and services used, React Native, and CSS. I also worked on a project in React Native while working with Verizon.</div>
                    </div>
                </li>

                <li>
                    <div class="direction-r">
                        <span class="time-wrapper" data-aos="fade-right"><span class="time">July 2014</span></span>
                        <div class="flag-wrapper">
                            <span class="circ" data-aos="zoom-out"></span>
                            <span class="flag" data-aos="fade-left">C#/Unity 3D</span>
                        </div>
                    <div class="desc" data-aos="fade-left"> From developing games with the Unity game engine, I have skills with game AI, state machines, player animations, C#, and game design principles. 
                    </div>
                    </div>
                </li>

                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper">
                            <span class="circ" data-aos="zoom-out" ></span>
                            <span class="flag">Android/Java</span>
                        </div>
                        <span class="time-wrapper" data-aos="fade-left"><span class="time">Dec 2014</span></span>
                    <div class="desc" data-aos="fade-right">Java was my first computer language I learned indepth and I have worked on projects in Android Studio for
                    hackathons, class projects, and during my time with Verizon. This is where I began gaining skills with Java as an Object Oriented language and with basic application development practices.</div>
                    </div>
                </li>
            </ul>
            <div className='moreSpace'></div>
            <div className='moreSpace'></div>
            <div className='moreSpace'></div>
        </div>
    )
}) 
export default Skills;