import React from 'react';
import './ContentPanel.css';

const PanelA = React.forwardRef((props, ref)=>{

    return (
        <div className='column'>
            <div className='box' ref={ref}>
                <h1 class="header fade-up">Hello!</h1>
                <h1 class="header fade-up">I'm Chianne</h1>
            </div> 
        </div>
    )
}) 
    


export default PanelA;