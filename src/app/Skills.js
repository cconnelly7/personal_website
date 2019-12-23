import React from 'react';
import './ContentPanel.css';
import './Skills.css'

var bgColors = { 
                    "Orange": "#EA8D4E",
                    "Red": "#E46765",
                    "Blue": "#3E99CD",
                    "Navy": "#4A637B",
                    "Purple": "#807798",
                    "Pink": "#D46E8F"
};

const Skills = React.forwardRef((props, ref)=>{

    return (
        <div className='box3'>
            <div className='content'>
                <div data-aos='fade-in' className='sectionHeader'>Skills</div>
                <div className='whiteSpace'></div>
            </div>
            <div className='moreSpace'></div>

            <ul class="timeline">
                <li>
                    <div class="direction-r">
                    <div class="flag-wrapper">
                        <span class="circ" data-aos="zoom-out"></span>
                        <span class="flag">React</span>
                        <span class="time-wrapper"><span class="time">Feb 2015</span></span>
                    </div>
                    <div class="desc">Lorem ipsum Nisi labore aute do aute culpa magna nulla voluptate exercitation deserunt proident.</div>
                    </div>
                </li>

                <li>
                    <div class="direction-l">
                    <div class="flag-wrapper">
                        <span class="circ" data-aos="zoom-out" ></span>
                        <span class="flag">Lorem ipsum Anim.</span>
                        <span class="time-wrapper"><span class="time">Dec 2014</span></span>
                    </div>
                    <div class="desc">Lorem ipsum In ut sit in dolor nisi ex magna eu anim anim tempor dolore aliquip enim cupidatat laborum dolore.</div>
                    </div>
                </li>

                <li>
                    <div class="direction-r">
                    <div class="flag-wrapper">
                        <span class="circ" data-aos="zoom-out"></span>
                        <span class="flag">Lorem Occaecat.</span>
                        <span class="time-wrapper"><span class="time">July 2014</span></span>
                    </div>
                    <div class="desc">Lorem ipsum Minim labore Ut cupidatat quis qui deserunt proident fugiat pariatur cillum cupidatat reprehenderit sit id dolor consectetur ut.</div>
                    </div>
                </li>
            </ul>

            {/* <div data-aos="zoom-out" data-aos-duration="2000" className='dot'></div>
            <div data-aos="zoom-out" data-aos-duration="2000" className='dot'></div>
            <div data-aos="zoom-out" data-aos-duration="2000" className='dot'></div>
            <div className='row' style={{zIndex: 2}}>
                <div className='circleIcon'></div>
                <div class="circle">
                    <div class="inner"></div>
                </div>
                <div data-aos="zoom-out" data-aos-duration="2000" className='dot'></div>
                <div data-aos="zoom-out" data-aos-duration="2000" className='dot'></div>
                <div data-aos="zoom-out" data-aos-duration="2000" className='dot'></div>
                <div className='skill' style={{backgroundColor: bgColors.Orange}} data-aos="zoom-out">React</div>
                <div data-aos="zoom-out" data-aos-duration="2000" className='dot'></div>
                <div data-aos="zoom-out" data-aos-duration="2000" className='dot'></div>
                <div data-aos="zoom-out" data-aos-duration="2000" className='dot'></div>
                <div class="inner"></div>
                <div className='skillText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
            <div class="circle" style={{zIndex: 2}}>
                <div class="inner"></div>
            </div>
            <div data-aos="zoom-out" data-aos-duration="2000" className='dot'></div>
            <div data-aos="zoom-out" data-aos-duration="2000" className='dot'></div>
            <div data-aos="zoom-out" data-aos-duration="2000" className='dot'></div> */}

            <div className='moreSpace'></div>
        </div>
    )
}) 
export default Skills;