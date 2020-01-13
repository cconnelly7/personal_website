import React from 'react';
import './ContentPanel.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Contact = React.forwardRef((props, ref)=>{

    return (
        <div className='box2 color'>
            <div className='content'>
                <div className='sectionTitle'>Contact</div>
                <div className='whiteSpace'></div>
            </div>

            <div className='moreSpace'></div>

            <ScrollAnimation animateIn="flipInY">
            <div className='content'>
                <div className='squarePhone inline-photo show-on-scroll'></div>
                <div className='rectangle inline-photo show-on-scroll'>(480) 467 - 9108 </div>
            </div>
            <div className='content'>
                <div className='squareEmail'></div>
                <div className='rectangle'> <a className='email' href = "mailto:chiannerose@gmail.com?subject = Feedback">chiannerose@gmail.com</a></div>
            </div>
            </ScrollAnimation>
        </div>
    )
}) 
export default Contact;