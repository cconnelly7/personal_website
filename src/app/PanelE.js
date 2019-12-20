import React from 'react';
import './ContentPanel.css';

const PanelE = React.forwardRef((props, ref)=>{

    return (
        <div className='column' ref={ref}>
            <div className='box2' >
            <a href="/Assets/2020ChianneConnellyResume.jpg" download>
                <button class="downloadBtn"><i class="fa fa-download"></i> Download</button>
            </a>

            {/* <a class="downloadBtn" href="./Assets/2020ChianneConnellyResume.jpg" download="ChianneConnellyResume" download>Download
                <i class="fa fa-download"></i>
            </a> */}
                <div className='resume-image'></div>
            {/* <object data="./Assets/2020ChianneConnellyResume.pdf" type="application/pdf" width="100%" height="100%">
                <p>Alternative text - include a link <a href="./Assets/2020ChianneConnellyResume.pdf">to the PDF!</a></p>
            </object> */}
            </div> 
        </div>
    )
}) 
export default PanelE;