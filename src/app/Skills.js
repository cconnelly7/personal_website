import React from 'react';
import './ContentPanel.css';
import './Skills.css';

const Skills = React.forwardRef((props, ref)=>{

    return (
        <div className='box3 color'>
            <div className='content'>
                <div data-aos='fade-in' className='sectionTitle'>Skills</div>
                <div className='whiteSpace'></div>
            </div>
            <div className='moreSpace'></div>

            <ul class="timeline timelineColor">
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper" >
                            <span class="circ"data-aos="zoom-out"></span>
                            <span class="flag textColor" >Web Dev/React</span>
                        </div>
                        <div class="desc textColor" data-aos="fade-left" >From working at NCR and through school at GT, I have gained skills 
                        with React, CSS, HTML, jQuery, and JavaScript. 
                            <br/>
                            <img class='logo2' data-aos="fade-left" src='./logos/react.png'></img>
                            <img class='logo2' data-aos="fade-left" src='./logos/jquery.png'></img>
                            <img class='logo2' data-aos="fade-left" src='./logos/html.png'></img>
                            <img class='logo2' data-aos="fade-left" src='./logos/css.png'></img>
                            <img class='logo2' data-aos="fade-left" src='./logos/javascript.png'></img>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper">
                            <span class="circ" data-aos="zoom-out" ></span>
                            <span class="flag textColor">App Dev/React Native</span>
                        </div>
                        <div class="desc textColor" data-aos="fade-right">This past semester I was working on a project in React Native for the Innovation Lab at NCR. 
                        While there, I built up my skills with JavaScript, redux, their APIs and services used, React Native, HTML, and CSS. I also worked on a project in React Native while working with Verizon.
                            <br/>
                            <img class='logo2' data-aos="fade-right" src='./logos/react.png'></img>
                            <img class='logo2' data-aos="fade-right" src='./logos/redux.png'></img>
                            <img class='logo2' data-aos="fade-right" src='./logos/html.png'></img>
                            <img class='logo2' data-aos="fade-right" src='./logos/css.png'></img>
                            <img class='logo2' data-aos="fade-right" src='./logos/javascript.png'></img>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper">
                            <span class="circ" data-aos="zoom-out"></span>
                            <span class="flag textColor" data-aos="fade-left">C#/Unity 3D</span>
                        </div>
                        <div class="desc textColor" data-aos="fade-left"> From developing games with the Unity game engine, I have skills with game AI, state machines, player animations, C#, and game design principles. 
                            <br/>
                            <img class='logo2' data-aos="fade-left" src='./logos/Csharp_Logo.png'></img>
                            <img class='logo2' data-aos="fade-left" src='./logos/unity.png'></img>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper">
                            <span class="circ" data-aos="zoom-out" ></span>
                            <span class="flag textColor">Android/Java</span>
                        </div>
                        <div class="desc textColor" data-aos="fade-right">Java was my first computer language I learned indepth and I have worked on projects in Android Studio for
                        hackathons, class projects, and during my time with Verizon. This is where I began gaining skills with Java as an Object Oriented language and with basic application development practices.
                            <br/>
                            <img class='logo3' data-aos="fade-right" src='./logos/android.png'></img>
                            <img class='logo3' data-aos="fade-right" src='./logos/androidStudio.png'></img>
                            <img class='logo3' data-aos="fade-right" src='./logos/java.png'></img>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper">
                            <span class="circ" data-aos="zoom-out"></span>
                            <span class="flag textColor" data-aos="fade-left">Others</span>
                        </div>
                        <div class="desc textColor" data-aos="fade-left"> During my time in school and working both at Verizon and NCR I have become familiar 
                        with agile practices, SCRUM, JIRA, Bitbucket, Github, Git, and other development tools.
                            <br/>
                            <img class='logo3' data-aos="fade-left" src='./logos/github.png'></img>
                            <img class='logo3' data-aos="fade-left" src='./logos/jira.png'></img>
                            <img class='logo2' data-aos="fade-left" src='./logos/bitbucket.png'></img>
                            <img class='logo3' data-aos="fade-left" src='./logos/Git.png'></img>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper">
                            <span class="circ" data-aos="zoom-out" ></span>
                            <span class="flag textColor">Design</span>
                        </div>
                    <div class="desc somePadding textColor" data-aos="fade-right">
                        While studying Industrial Design at Georgia Tech I developed skills with ideation, brainstorming, rapid prototyping, research, and iterative design. 
                    </div>
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