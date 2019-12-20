import React from 'react';
import './ContentPanel.css';

const PanelG = React.forwardRef((props, ref)=>{

    return (
        <div className='column' ref={ref}>
            <div className='box3' ></div> 
        </div>
    )
}) 
export default PanelG;