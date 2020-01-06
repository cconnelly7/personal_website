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
 
 

function ScarfBoi() {
    return(
      <div>
        <ScrollToTopOnMount />
        <div class="projPic">
          <h4 class='projHeader'>The Legend of Scarf Boi</h4>
        </div>
        <div class="projBg">
          <div class="projContent">
            <img class="banner" src="./Projects/Scarfboi/ScarfBoiBanner.png"></img>
            <h4 class='sectionHeader'>Overview</h4>
            <p>The Legend of Scarf Boi is a video game developed in Unity 3D using C#. Play as Scarf Boi as he
                attempts to free himself from the confinements of a dreamworld from which he was created. In order to escape, he
                must avoid the Dreamcatchers, steal goodness, and ultimately turn the dreams he enters into nightmares.
            </p>
            <br/>
            <div className="h_iframe">
              <img className="ratio" src="http://placehold.it/16x9" />
              <iframe src="https://www.youtube.com/embed/XM-Yt4_J-2Q" frameBorder="0" allowFullScreen></iframe>
            </div>
            <br/>
            <h4 class='sectionHeader'>Features/Tech Used</h4>
            <p>Mapping animations to individual body parts, player detection for enemy AI, state machine, Unity 3D, C#.
            </p>
            <div class='extraSpace'></div>
          </div>
        </div>
      </div>
    )
}

export default ScarfBoi;