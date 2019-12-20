import React from 'react';
import './AboutMe.css';

const AboutMe = React.forwardRef((props, ref)=>{

    return (
        <div height='100vh'>
        <div className='box2' ref={ref}>
            <div className='content'>
                <div data-aos='fade-in' className='aboutMe'>About Me</div>
                <div className='whiteSpace'></div>
            </div>
            
            <div className='content'>
                <div className='text'>
                    <div data-aos='fade-up'>
                        I am Chianne Connelly. I just graduated from Georgia Tech and began my career as
                        a Software Engineer. Check out this video to learn more!
                    </div>
                </div>
                {/* <div data-id="1" data-aos="fade-up"> */}
                <div className="wrapper">
                    <div className="h_iframe">
                        <img data-aos='fade-down' className="ratio" src="http://placehold.it/16x9" />
                        <iframe data-aos='fade-down' src="https://www.youtube.com/embed/Nm_f_44ZgLM" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
                {/* </div> */}


            </div>
        </div> 
        </div>
    )
}) 

export default AboutMe;