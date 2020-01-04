import React from 'react';
import $ from 'jquery';
import './Projects.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";


function popupOpenClose(popup) {
	
	/* Open popup */
	$(popup).show();

	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});

	/* Close popup and remove errors if user clicks on cancel or close buttons */
	$(popup).find("button[name=close]").on("click", function() {
		if ($(".formElementError").is(':visible')) {
			$(".formElementError").remove();
		}
		$(popup).hide();
	});
}

$(document).ready(function () {
	$("[data-js=open]").on("click", function() {
		popupOpenClose($(".popup"));
	});
});


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
                            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button data-js="open" class="btn card_btn"><Link class="linkStlye" to="/computer_graphics">View</Link></button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div data-aos="zoom-in-left" class="card">
                            <img class="card_image" src="./Projects/IceClimber/ice.jpg"></img>
                            <div class="card_content">
                            <h4 class="card_title">Ice Climber</h4>
                            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button data-js="open" class="btn card_btn"><Link class="linkStlye" to="/ice_climber">View</Link></button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div data-aos="zoom-in-left" class="card">
                            <img class="card_image" src="./Projects/Glance/glance0.jpg"></img>
                            <div class="card_content">
                            <h4 class="card_title">Glance</h4>
                            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button data-js="open" class="btn card_btn"><Link class="linkStlye" to="/glance">View</Link></button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div data-aos="zoom-in-left" class="card">
                            <img class="card_image" src="./Projects/WMS/wms.jpg"></img>
                            <div class="card_content">
                            <h4 class="card_title">Where's My Stuff App</h4>
                            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button data-js="open" class="btn card_btn"><Link class="linkStlye" to="/wms">View</Link></button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div data-aos="zoom-in-left" class="card">
                            <img class="card_image" src="./Projects/Scarfboi/Scarfboi.jpg"></img>
                            <div class="card_content">
                            <h4 class="card_title">The Legend of Scarf Boi</h4>
                            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button data-js="open" class="btn card_btn"><Link class="linkStlye" to="/scarfboi">View</Link></button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div data-aos="zoom-in-left" class="card">
                            <img class="card_image" src="./Projects/SpaceEx/SpaceEx.jpg"></img>
                            <div class="card_content">
                            <h4 class="card_title">SpaceEx</h4>
                            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button data-js="open" class="btn card_btn"><Link class="linkStlye" to="/spaceEx">View</Link></button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div data-aos="zoom-in-left" class="card">
                            <img class="card_image" src="./Projects/Grown/Grown.jpg"></img>
                            <div class="card_content">
                            <h4 class="card_title">Grown Lamp Design</h4>
                            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
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

{/* <button data-js="open">project1</button>

<div class="popup">
    <h1>This is my popup</h1>
    <a>Lorem ipsum dolor sit amet consectetur, adipiscing elit lacinia mus, sapien nibh imperdiet tempus. Vitae massa semper mi sagittis a cum cursus fusce per, gravida tellus metus purus litora nam ultricies donec, nibh dis ligula ad facilisi penatibus condimentum aenean.</a>

    <a>Aliquet odio id vulputate ad sodales blandit tempor, neque facilisi turpis dis curabitur ac velit potenti, montes bibendum pretium lacinia lobortis aenean. Orci integer eu tincidunt  scelerisque iaculis, porta elementum sagittis proin penatibus magna tempor.</a>
    <button name="close">Close</button>
</div> */}