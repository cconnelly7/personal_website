import React from 'react';
import './ContentPanel.css';

const PanelC = React.forwardRef((props, ref)=>{

    return (
        <div className='column'>
            <div className='box3' ref={ref}></div> 
        </div>
    )
}) 
export default PanelC;