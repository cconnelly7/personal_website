import React from 'react';
import '../css/ContentPanel.css';

const Resume = React.forwardRef((props, ref)=>{

    return (
        <div>
            <div className='box2 color' >
                <div className='content'>
                    <div className='sectionTitle'>Resume</div>
                    <div className='whiteSpace'></div>
                </div>
                <div className='moreSpace'></div>
                <iframe src="https://drive.google.com/file/d/15n_2zcVzuecoS3htqmBKfCpyZfqN6sy-/preview" width="80%" height="60%"></iframe>
                <div className='moreSpace'></div>
                <a href="ChianneConnellyResume.pdf" download>
                    <button class="downloadBtn"><i class="fa fa-download"></i> Download</button>
                </a>
            </div>      
            <div className='moreSpace'></div>
            <div className='moreSpace'></div>
        </div>
                    
    )
}) 
export default Resume;