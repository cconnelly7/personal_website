import React from 'react';
import './ContentPanel.css';
import './Skills.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Skills = React.forwardRef((props, ref)=>{

    return (
        <div className='box3 color'>
            <div className='content'>
                <div className='sectionTitle'>Skills</div>
                <div className='whiteSpace'></div>
            </div>
            <div className='moreSpace'></div>

            <ul class="timeline timelineColor">
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper" >
                            <span class="circ"></span>
                            <span class="flag textColor" >Web Dev/React</span>
                        </div>
                        <ScrollAnimation animateIn="bounceInRight">
                            <div class="desc textColor">
                            From working at NCR and through school at GT, I have gained skills 
                            with React, CSS, HTML, jQuery, and JavaScript. 
                                <br/>
                                <img class='logo2' src='./logos/react.png'></img>
                                <img class='logo2' src='./logos/jquery.png'></img>
                                <img class='logo2' src='./logos/html.png'></img>
                                <img class='logo2' src='./logos/css.png'></img>
                                <img class='logo2' src='./logos/javascript.png'></img>
                            </div>
                        </ScrollAnimation> 
                    </div>
                </li>

                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper">
                            <span class="circ" ></span>
                            <span class="flag textColor">App Dev/React Native</span>
                        </div>
                        <ScrollAnimation animateIn="bounceInLeft">
                        <div class="desc textColor">This past semester I was working on a project in React Native for the Innovation Lab at NCR. 
                        While there, I built up my skills with JavaScript, redux, their APIs and services used, React Native, HTML, and CSS. I also worked on a project in React Native while working with Verizon.
                            <br/>
                            <img class='logo2' src='./logos/react.png'></img>
                            <img class='logo2' src='./logos/redux.png'></img>
                            <img class='logo2' src='./logos/html.png'></img>
                            <img class='logo2' src='./logos/css.png'></img>
                            <img class='logo2' src='./logos/javascript.png'></img>
                        </div>
                        </ScrollAnimation>
                    </div>
                </li>

                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper">
                            <span class="circ"></span>
                            <span class="flag textColor">C#/Unity 3D</span>
                        </div>
                        <ScrollAnimation animateIn="bounceInRight">
                        <div class="desc textColor"> From developing games with the Unity game engine, I have skills with game AI, state machines, player animations, C#, and game design principles. 
                            <br/>
                            <img class='logo2' src='./logos/Csharp_Logo.png'></img>
                            <img class='logo2' src='./logos/unity.png'></img>
                        </div>
                        </ScrollAnimation>
                    </div>
                </li>

                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper">
                            <span class="circ" ></span>
                            <span class="flag textColor">Android/Java</span>
                        </div>
                        <ScrollAnimation animateIn="bounceInLeft">
                        <div class="desc textColor">Java was my first computer language I learned indepth and I have worked on projects in Android Studio for
                        hackathons, class projects, and during my time with Verizon. This is where I began gaining skills with Java as an Object Oriented language and with basic application development practices.
                            <br/>
                            <img class='logo3' src='./logos/android.png'></img>
                            <img class='logo3' src='./logos/androidStudio.png'></img>
                            <img class='logo3' src='./logos/java.png'></img>
                        </div>
                        </ScrollAnimation>
                    </div>
                </li>
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper">
                            <span class="circ"></span>
                            <span class="flag textColor">Others</span>
                        </div>
                        <ScrollAnimation animateIn="bounceInRight">
                        <div class="desc textColor"> During my time in school and working both at Verizon and NCR I have become familiar 
                        with agile practices, SCRUM, JIRA, Bitbucket, Github, Git, and other development tools.
                            <br/>
                            <img class='logo3' src='./logos/github.png'></img>
                            <img class='logo3' src='./logos/jira.png'></img>
                            <img class='logo2' src='./logos/bitbucket.png'></img>
                            <img class='logo3' src='./logos/Git.png'></img>
                        </div>
                        </ScrollAnimation>
                    </div>
                </li>
                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper">
                            <span class="circ"></span>
                            <span class="flag textColor">Design</span>
                        </div>
                        <ScrollAnimation animateIn="bounceInLeft">
                        <div class="desc somePadding textColor">
                            While studying Industrial Design at Georgia Tech I developed skills with ideation, brainstorming, rapid prototyping, research, and iterative design. 
                        </div>
                        </ScrollAnimation>
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