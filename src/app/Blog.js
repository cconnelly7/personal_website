import React from 'react';
import './ContentPanel.css';
import './Projects.css';

const Blog = React.forwardRef((props, ref)=>{

    return (
        <div className='box3' >
            <div className='content'>
                <div data-aos='fade-in' className='sectionHeader'>Blog</div>
                <div className='whiteSpace'></div>
            </div>
            <div className='moreSpace'></div>
            <ul class="cards">
                <li class="cards_item">
                    <div data-aos="zoom-in-left" class="card">
                        <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"></img></div>
                        <div class="card_content">
                        <h4 class="card_title">Card Grid Layout</h4>
                        <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                        <button data-js="open" class="btn card_btn">Read More</button>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div data-aos="zoom-in-left" class="card">
                        <div class="card_image"><img src="https://picsum.photos/500/300/?image=5"></img></div>
                        <div class="card_content">
                        <h4 class="card_title">Card Grid Layout</h4>
                        <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                        <button class="btn card_btn">Read More</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div> 
    )
}) 
export default Blog;