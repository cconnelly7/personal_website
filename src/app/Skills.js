import React from 'react';
import './ContentPanel.css';
import './Skills.css'

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
                        <span class="time-wrapper" data-aos="fade-right"><span class="time">Dec 2014</span></span>
                        <div class="flag-wrapper" >
                            <span class="circ"data-aos="zoom-out"></span>
                            <span class="flag" >Web Dev/React</span>
                        </div>
                    <   div class="desc" data-aos="fade-left" >Lorem ipsum Nisi labore aute do aute culpa magna nulla voluptate exercitation deserunt proident. </div>
                    </div>
                </li>

                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper">
                            <span class="circ" data-aos="zoom-out" ></span>
                            <span class="flag">App Dev/React-Native</span>
                        </div>
                        <span class="time-wrapper" data-aos="fade-left"><span class="time">Dec 2014</span></span>
                    <div class="desc" data-aos="fade-right">Lorem ipsum In ut sit in dolor nisi ex magna eu anim anim tempor dolore aliquip enim cupidatat laborum dolore.</div>
                    </div>
                </li>

                <li>
                    <div class="direction-r">
                        <span class="time-wrapper" data-aos="fade-right"><span class="time">July 2014</span></span>
                        <div class="flag-wrapper">
                            <span class="circ" data-aos="zoom-out"></span>
                            <span class="flag" data-aos="fade-left">Android/Java</span>
                        </div>
                    <div class="desc" data-aos="fade-left">Lorem ipsum Minim labore Ut cupidatat quis qui deserunt proident fugiat pariatur cillum cupidatat reprehenderit sit id dolor consectetur ut.</div>
                    </div>
                </li>

                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper">
                            <span class="circ" data-aos="zoom-out" ></span>
                            <span class="flag">C#/Unity 3D</span> {/* C#/Unity 3D */}
                        </div>
                        <span class="time-wrapper" data-aos="fade-left"><span class="time">Dec 2014</span></span>
                    <div class="desc" data-aos="fade-right">Lorem ipsum In ut sit in dolor nisi ex magna eu anim anim tempor dolore aliquip enim cupidatat laborum dolore.</div>
                    </div>
                </li>
            </ul>
            <div className='moreSpace'></div>
            <div className='moreSpace'></div>
            <div className='moreSpace'></div>
        </div>
    )
}) 
export default Skills;