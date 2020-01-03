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
                            <img class="card_image" src="./Projects/ComputerGraphics/Walker.png"></img>
                            <div class="card_content">
                            <h4 class="card_title">Computer Graphics Series</h4>
                            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button data-js="open" class="btn card_btn"><Link class="linkStlye" to="/computer_graphics">View</Link></button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div data-aos="zoom-in-left" class="card">
                            <div class="card_image"><img src="https://picsum.photos/500/300/?image=5"></img></div>
                            <div class="card_content">
                            <h4 class="card_title">Ice Climber</h4>
                            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button class="btn card_btn">View</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div data-aos="zoom-in-left" class="card">
                            <div class="card_image"><img src="https://picsum.photos/500/300/?image=11"></img></div>
                            <div class="card_content">
                            <h4 class="card_title">Card Grid Layout</h4>
                            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button class="btn card_btn">View</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div data-aos="zoom-in-left" class="card">
                            <div class="card_image"><img src="https://picsum.photos/500/300/?image=14"></img></div>
                            <div class="card_content">
                            <h4 class="card_title">Card Grid Layout</h4>
                            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button class="btn card_btn">View</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div data-aos="zoom-in-left" class="card">
                            <div class="card_image"><img src="https://picsum.photos/500/300/?image=17"></img></div>
                            <div class="card_content">
                            <h4 class="card_title">Card Grid Layout</h4>
                            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button class="btn card_btn">View</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div data-aos="zoom-in-left" class="card">
                            <div class="card_image"><img src="https://picsum.photos/500/300/?image=2"></img></div>
                            <div class="card_content">
                            <h4 class="card_title">Card Grid Layout</h4>
                            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button class="btn card_btn">View</button>
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