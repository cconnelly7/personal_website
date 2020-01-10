import React from 'react';
import './ContentPanel.css';

const Resume = React.forwardRef((props, ref)=>{

    return (
        <div className='box2 color' >
            <div className='content'>
                <div data-aos='fade-in' className='sectionTitle'>Resume</div>
                <div className='whiteSpace'></div>
            </div>
            <div className='moreSpace'></div>
            <iframe data-aos='fade-up' src="https://drive.google.com/file/d/164KZqI3Pk_GGUOFjTt2XIn7sUiUtROA-/preview" width="80%" height="60%"></iframe>
            <div className='moreSpace'></div>

            <a href="2020ChianneConnellyResume.pdf" download>
                <button data-aos='fade-up' class="downloadBtn"><i class="fa fa-download"></i> Download</button>
            </a>
            
            <div className='moreSpace'></div>
            <div className='moreSpace'></div>
        </div> 
    )
}) 
export default Resume;