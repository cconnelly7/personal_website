import React from 'react';
import './Project.css';
import $ from 'jquery';

$(function(){
  var shrinkHeader = 200;
   $(window).scroll(function() {
     var scroll = getCurrentScroll();
       if ( scroll >= shrinkHeader ) {
            $('.projPic').addClass('shrink');
         }
         else {
            $('.projPic').removeClass('shrink');       
         }
   });
 function getCurrentScroll() {
     return window.pageYOffset || document.documentElement.scrollTop;
     }
});
 
 $(document).ready(function(){ })


class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}
 
 

function Glance() {
    return(
      <div>
        <ScrollToTopOnMount />
        <div class="projPic">
          <h4 class='projHeader'>Glance</h4>
        </div>
        <div class="projBg">
          <div class="projContent">
            <img class="banner" src="./Projects/Glance/Glance.png"></img>
            <h4 class='sectionHeader'>Overview</h4>
            <p> Glance is a smart product that helps users stay safe on their walk home at night. It features a distance sensor that attaches to the back of the user's backpack.
               When the product is turned on, if a predator gets within a close range to the user, an light that is attached to the backpack strap will flash orange to alert the user along with a gentle vibration. If
                the predator stays within this range over several seconds, the light will flash red.
            </p>
            <div class="imgContainer">
              <img class="image3" src="./Projects/Glance/distanceSensor.png"></img>
              <img class="image3" src="./Projects/Glance/light.png"></img>
            </div>
            <p>
            The user can chose to attach their device to a clip to put on their backpack or to a wristband. 
            </p>
            <img class="image1" src="./Projects/Glance/glance.gif"></img>
            
          </div>
        </div>
      </div>
    )
}

export default Glance;