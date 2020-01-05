import React from 'react';
import $ from 'jquery';
import './Projects.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const Projects = React.forwardRef((props, ref)=>{

    return (
        <div className='box3' >
            <div className='content'>
                <div data-aos='fade-in' className='sectionHeader'>Projects</div>
                <div className='whiteSpace'></div>
            </div>

            <div className='moreSpace'></div>

                <ul class="cards">
                    <li class="cards_item">
                        <div data-aos="zoom-in-left" class="card">
                            <img class="card_image" src="./Projects/ComputerGraphics/Walker.jpg"></img>
                            <div class="card_content">
                            <h4 class="card_title">Computer Graphics Series</h4>
                            <p class="card_text">Animated shapes and structures that the user can manipulate.</p>
                            <button data-js="open" class="btn card_btn"><Link class="linkStlye" to="/computer_graphics">View</Link></button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div data-aos="zoom-in-left" class="card">
                            <img class="card_image" src="./Projects/IceClimber/ice.jpg"></img>
                            <div class="card_content">
                            <h4 class="card_title">Ice Climber</h4>
                            <p class="card_text">Video game developed for the Gameboy Advance.</p>
                            <button data-js="open" class="btn card_btn"><Link class="linkStlye" to="/ice_climber">View</Link></button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div data-aos="zoom-in-left" class="card">
                            <img class="card_image" src="./Projects/Glance/glance0.jpg"></img>
                            <div class="card_content">
                            <h4 class="card_title">Glance</h4>
                            <p class="card_text">Smart product to keep users safe on their walk home.</p>
                            <button data-js="open" class="btn card_btn"><Link class="linkStlye" to="/glance">View</Link></button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div data-aos="zoom-in-left" class="card">
                            <img class="card_image" src="./Projects/WMS/wms.jpg"></img>
                            <div class="card_content">
                            <h4 class="card_title">Where's My Stuff App</h4>
                            <p class="card_text">Application to help users find their belongings after a natural disaster.</p>
                            <button data-js="open" class="btn card_btn"><Link class="linkStlye" to="/wms">View</Link></button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div data-aos="zoom-in-left" class="card">
                            <img class="card_image" src="./Projects/Scarfboi/Scarfboi.jpg"></img>
                            <div class="card_content">
                            <h4 class="card_title">The Legend of Scarf Boi</h4>
                            <p class="card_text">Video game about a boy who must escape his nightmares.</p>
                            <button data-js="open" class="btn card_btn"><Link class="linkStlye" to="/scarfboi">View</Link></button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div data-aos="zoom-in-left" class="card">
                            <img class="card_image" src="./Projects/SpaceEx/SpaceEx.jpg"></img>
                            <div class="card_content">
                            <h4 class="card_title">SpaceEx</h4>
                            <p class="card_text">Interactive space helmet that kids wear to explore the universe. </p>
                            <button data-js="open" class="btn card_btn"><Link class="linkStlye" to="/spaceEx">View</Link></button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div data-aos="zoom-in-left" class="card">
                            <img class="card_image" src="./Projects/Grown/Grown.jpg"></img>
                            <div class="card_content">
                            <h4 class="card_title">Grown Lamp Design</h4>
                            <p class="card_text">Floor lamp design to light up any space.</p>
                            <button data-js="open" class="btn card_btn"><Link class="linkStlye" to="/grown">View</Link></button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div data-aos="zoom-in-left" class="card">
                            <img class="card_image" src="./Projects/Web/web.jpg"></img>
                            <div class="card_content">
                            <h4 class="card_title">This Website</h4>
                            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button data-js="open" class="btn card_btn"><Link class="linkStlye" to="/glance">View</Link></button>
                            </div>
                        </div>
                    </li>
                </ul>
                
        </div> 
    )
}) 
export default Projects;
