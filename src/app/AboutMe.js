import React from 'react';
import './AboutMe.css';

const AboutMe = React.forwardRef((props, ref)=>{

    return (
        <div className='column'>
            <div className='box2' ref={ref}>
                <div className='content'>
                    <div className='aboutMe'>About Me</div>
                    <div className='whiteSpace'></div>
                </div>

                <div className='content'>
                    <div className='text'>
                        I am Chianne Connelly. I just graduated from Georgia Tech and began my career as
                         a Software Engineer. 
                    </div>

                    {/* <div data-id="1" data-aos="fade-up"> */}
                    <div class="wrapper">
                        <div class="h_iframe">
                            <img class="ratio" src="http://placehold.it/16x9" />
                            <iframe src="https://www.youtube.com/embed/Nm_f_44ZgLM" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                    {/* </div> */}


                </div>

            </div> 
        </div>
    )
}) 

export default AboutMe;