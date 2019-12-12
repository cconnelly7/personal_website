import React from 'react';
import './ContentPanel.css';

const PanelA = React.forwardRef((props, ref)=>{

    return (
        <div className='column'>
            <div className='box' ref={ref}></div> 
        </div>
    )
}) 
    


export default PanelA;