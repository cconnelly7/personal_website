import React from 'react';
import '../css/AboutMe.css';
import ScrollAnimation from 'react-animate-on-scroll';

const AboutMe = React.forwardRef((props, ref)=>{

    return (
        <div>
        <div className='box2 color' ref={ref}>
            <div className='extraSpace'></div>
            <div className='content'>
                <div className='aboutMe'>About Me</div>
                <div className='whiteSpace'></div>
            </div>
            <div className='content'>
                <div className='text'>
                    <ScrollAnimation animateIn="flipInY">
                        I am Chianne Connelly. I just graduated from Georgia Tech and began my career as
                        a software engineer. Check out this video to learn more!
                    </ScrollAnimation>
                </div>
                <div className="wrapper">
                    <div className="h_iframe">
                        <img className="ratio" src="http://placehold.it/16x9" />
                        <iframe src="https://www.youtube.com/embed/Nm_f_44ZgLM" frameBorder="0"></iframe>
                    </div>
                </div>
            </div>
        </div> 
        <div className='extraSpace'></div>
        </div>
    )
}) 

export default AboutMe;