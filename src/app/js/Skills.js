import React from 'react';
import '../css/ContentPanel.css';
import '../css/Skills.css';
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
                            with React, JavaScript, HTML, CSS, and Redux. 
                                <br/>
                                <img class='logo2' src='./logos/react.png'></img>
                                <img class='logo2' src='./logos/javascript.png'></img>
                                <img class='logo2' src='./logos/html.png'></img>
                                <img class='logo2' src='./logos/css.png'></img>
                                <img class='logo2' src='./logos/redux.png'></img>
                            </div>
                        </ScrollAnimation> 
                    </div>
                </li>

                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper">
                            <span class="circ" ></span>
                            <span class="flag textColor">Frontend</span>
                        </div>
                        <ScrollAnimation animateIn="bounceInLeft">
                        <div class="desc textColor">Frontend is my favorite type of development because it's creative 
                        and technically challenging. It's very easy for me to figure things out when I can see them changing on the screen. 
                            <br/>
                            
                        </div>
                        </ScrollAnimation>
                    </div>
                </li>

                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper">
                            <span class="circ"></span>
                            <span class="flag textColor">APIs/Backend</span>
                        </div>
                        <ScrollAnimation animateIn="bounceInRight">
                        <div class="desc textColor"> From working with NCR I have experience writing API calls, creating new endpoints, and optimizing databases. I have worked with SQL, C#, and Redis.
                            <br/>
                            <img class='logo3' src='./logos/sql.png'></img>
                            <img class='logo3' src='./logos/csharp.png'></img>
                            <img class='logo3' src='./logos/redis.png'></img>
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
                        <div class="desc textColor">Java was my first computer language I learned in-depth and I have worked on projects in Android Studio for
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
                        <div class="desc textColor"> During my time in school and working both at Verizon and NCR, I have become familiar 
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
                            <span class="flag textColor">Innovative Thinking</span>
                        </div>
                        <ScrollAnimation animateIn="bounceInLeft">
                        <div class="desc somePadding textColor">
                            I spent some of my time with NCR working in the Software Innovation Lab. We were constantly thinking of new ways to
                            use ML tools such as body tracking and computer vision to reshape digital banking.
                            <br/>
                            <img class='logo3' src='./logos/light.png'></img>
                            <img class='logo3' src='./logos/brain.png'></img>
                        </div>
                        </ScrollAnimation>
                    </div>
                </li>
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper">
                            <span class="circ"></span>
                            <span class="flag textColor">Design</span>
                        </div>
                        <ScrollAnimation animateIn="bounceInRight">
                        <div class="desc somePadding textColor">
                            While studying Industrial Design at Georgia Tech I developed skills with ideation, brainstorming, rapid prototyping, user research, and iterative design. 
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