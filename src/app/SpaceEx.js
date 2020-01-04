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
 
 

function SpaceEx() {
    return(
      <div>
        <ScrollToTopOnMount />
        <div class="projPic">
          <h4 class='projHeader'>SpaceEx</h4>
        </div>
        <div class="projBg">
          <div class="projContent">
            <img class="banner" src="./Projects/SpaceEx/SpaceExBanner.png"></img>
            <h4 class='sectionHeader'>Overview</h4>
            <p>Ice Climber is a video game developed in C for the Gameboy Advance. Due to the low level nature of C as a language, an emphasis was
               placed on the code architecture such that programming at the level of shuffling bytes could be easily understood.
               The player begins at the bottom of the mountain and they must climb to the top while avoiding falling ice balls and slippery ice patches. They must reach the top before their health runs out in order to win.
               </p>
            <div class="imgContainer">
              <img class="image2" src="./Projects/IceClimber/ic.0.png"></img>
              <img class="image2" src="./Projects/IceClimber/ic.1.png"></img>
              <img class="image2" src="./Projects/IceClimber/ic.2.png"></img>
              <img class="image2" src="./Projects/IceClimber/ic.3.png"></img>
            </div>
            <div class="imgContainer">
              <img class="image3" src="./Projects/IceClimber/ic.0.gif"></img>
              <img class="image3" src="./Projects/IceClimber/ic.1.gif"></img>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SpaceEx;