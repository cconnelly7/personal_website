import React from 'react';
import './ContentPanel.css';

const Contact = React.forwardRef((props, ref)=>{

    return (
        <div className='column' ref={ref}>
            <div className='box2' ></div>
        </div>
    )
}) 
export default Contact;