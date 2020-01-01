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
 
 

function Project1() {
    return(
      <div>
        <ScrollToTopOnMount />
        <div class="projPic">
          <h4>Computer Graphics Series</h4>
        </div>
        <div class="projBg">
          <div class="projContent">
            <img class="banner" src="./Projects/ComputerGraphics/WalkerBanner.png"></img>

          </div>
        </div>
      </div>
    )
}

export default Project1;