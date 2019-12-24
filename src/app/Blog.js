import React from 'react';
import './ContentPanel.css';

const Blog = React.forwardRef((props, ref)=>{

    return (
        <div className='box3' >
            <div className='content'>
                <div data-aos='fade-in' className='sectionHeader'>Blog</div>
                <div className='whiteSpace'></div>
            </div>
            <div className='moreSpace'></div>
        </div> 
    )
}) 
export default Blog;