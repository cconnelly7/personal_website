import React from 'react';
import './ContentPanel.css';

const PanelB = React.forwardRef((props, ref)=>{

    return (
        <div className='column'>
            <div className='box2' ref={ref}>
                <div data-id="1" data-aos="fade-up">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Nm_f_44ZgLM"
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                 </div>
            </div> 
        </div>
    )
}) 

export default PanelB;