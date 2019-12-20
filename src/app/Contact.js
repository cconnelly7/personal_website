import React from 'react';
import './ContentPanel.css';

const Contact = React.forwardRef((props, ref)=>{

    return (
        <div className='column' ref={ref}>
            <div className='box2' height='100vh'>
                <div className='content'>
                    <div data-aos='fade-in' className='sectionHeader'>Contact</div>
                    <div className='whiteSpace'></div>
                </div>

                <div className='content'>
                    <div className='squarePhone'></div>
                    <div className='rectangle'> (480) 467 - 9108</div>
                </div>
                <div className='content'>
                    <div className='squareEmail'></div>
                    <div className='rectangle'> chiannerose@gmail.com</div>
                </div>
            </div>
        </div>
    )
}) 
export default Contact;