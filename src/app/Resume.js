import React from 'react';
import './ContentPanel.css';

const Resume = React.forwardRef((props, ref)=>{

    return (
        <div className='box2' >
            <div className='content'>
                <div data-aos='fade-in' className='sectionHeader'>Resume</div>
                <div className='whiteSpace'></div>
            </div>
            <div className='moreSpace'></div>

            <a href="/Assets/2020ChianneConnellyResume.jpg" download>
                <button class="downloadBtn"><i class="fa fa-download"></i> Download</button>
            </a>


            {/* <div className="wrapper">
                <div className="h_iframe">
                    <img data-aos='fade-up' className="ratio" src="http://placehold.it/10x8" />
                    <iframe data-aos='fade-up' src="https://drive.google.com/file/d/164KZqI3Pk_GGUOFjTt2XIn7sUiUtROA-/preview" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div> */}
            
            <iframe src="https://drive.google.com/file/d/164KZqI3Pk_GGUOFjTt2XIn7sUiUtROA-/preview" width="80%" height="60%"></iframe>
            <div className='moreSpace'></div>
            <div className='moreSpace'></div>
        </div> 
    )
}) 
export default Resume;