import React from 'react';
import './ContentPanel.css';

const Contact = React.forwardRef((props, ref)=>{

    return (
        <div className='box2'>
            <div className='content'>
                <div data-aos='fade-in' className='sectionTitle'>Contact</div>
                <div className='whiteSpace'></div>
            </div>

            <div className='moreSpace'></div>

            <div className='content'>
                <div data-aos="flip-up" className='squarePhone'></div>
                <div data-aos="flip-up" className='rectangle'>(480) 467 - 9108 </div>
            </div>
            <div className='content'>
                <div data-aos="flip-down" className='squareEmail'></div>
                <div data-aos="flip-down" className='rectangle'> <a className='email' href = "mailto:chiannerose@gmail.com?subject = Feedback">chiannerose@gmail.com</a></div>
            </div>
        </div>
    )
}) 
export default Contact;