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
            <p>Children can travel to the farthest corners of their imagination with this helmet. When they turn the helmet on,
               an interactive space screen is displayed and they can travel anywhere in the entire universe. The design integrates 
                technology in a way that jumpstarts a childs imagination rather than closes it off. The helmet is
                 a space themed augmented reality for children. 
            </p>
            <br/>
            <div className="h_iframe">
              <img className="ratio" src="http://placehold.it/16x9" />
              <iframe src="https://www.youtube.com/embed/ORrfclNMtQk" frameBorder="0" allowFullScreen></iframe>
            </div>
            <div class="imgContainer">
              <img class="image4" src="./Projects/SpaceEx/SpaceEx.0.png"></img>
              <img class="image4" src="./Projects/SpaceEx/SpaceEx.1.png"></img>
              <img class="image4" src="./Projects/SpaceEx/SpaceEx.2.png"></img>
            </div>
            <div class='extraSpace'></div>
          </div>
        </div>
      </div>
    )
}

export default SpaceEx;