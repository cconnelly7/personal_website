import React from 'react';
import './ContentPanel.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Resume = React.forwardRef((props, ref)=>{

    return (
        <div>
            <div className='box2 color' >
                <div className='content'>
                    <div className='sectionTitle'>Resume</div>
                    <div className='whiteSpace'></div>
                </div>
                <div className='moreSpace'></div>
                <iframe src="https://drive.google.com/file/d/164KZqI3Pk_GGUOFjTt2XIn7sUiUtROA-/preview" width="80%" height="60%"></iframe>
                <div className='moreSpace'></div>

                <ScrollAnimation animateIn="fadeIn">
                <a href="2020ChianneConnellyResume.pdf" download>
                    <button class="downloadBtn"><i class="fa fa-download"></i> Download</button>
                </a>
                </ScrollAnimation>
            </div>      
            <div className='moreSpace'></div>
            <div className='moreSpace'></div>
        </div>
                    
    )
}) 
export default Resume;