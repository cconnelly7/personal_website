import React from 'react';
import './ContentPanel.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import $ from 'jquery';


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


const PanelD = React.forwardRef((props, ref)=>{

    return (
        <div className='box2' >
            <button data-js="open">project1</button>

            <div class="popup">
                <h1>This is my popup</h1>
                <a>Lorem ipsum dolor sit amet consectetur, adipiscing elit lacinia mus, sapien nibh imperdiet tempus. Vitae massa semper mi sagittis a cum cursus fusce per, gravida tellus metus purus litora nam ultricies donec, nibh dis ligula ad facilisi penatibus condimentum aenean.</a>

                <a>Aliquet odio id vulputate ad sodales blandit tempor, neque facilisi turpis dis curabitur ac velit potenti, montes bibendum pretium lacinia lobortis aenean. Orci integer eu tincidunt  scelerisque iaculis, porta elementum sagittis proin penatibus magna tempor.</a>
                <button name="close">Close</button>
            </div>
        </div> 
    )
}) 
export default PanelD;