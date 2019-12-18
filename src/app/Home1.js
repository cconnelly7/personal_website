import React from 'react';
import './Home.css';

const HomeScreen1 = React.forwardRef((props, ref)=>{

    return (
        <div>
            <div className='box0' ref={ref}>
                <h1 class="header fade-up1">I am a</h1>
                <h1 class="header fade-up1">Software Engineer</h1>
            </div> 
        </div>
    )
}) 
    


export default HomeScreen1;