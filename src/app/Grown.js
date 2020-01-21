import React from 'react';
import './css/Project.css';
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
 
 

function Grown() {
    return(
      <div>
        <ScrollToTopOnMount />
        <div class="projPic headerColor">
          <h4 class='projHeader'>Unfurl Lamp Design</h4>
        </div>
        <div class="projBg color">
          <div class="projContent">
            <img class="banner" src="./css/Projects/Grown/grown.1.png"></img>
            <h4 class='sectionHeader'>Overview</h4>
            <p class='feats'> Unfurl is a floor lamp standing 5 feet and 7 inches tall. Its style was inspired by Pablo Picasso - using cubism and an observation of how physical space and linear time relate to one another.
              Picasso saw that space unfolds in time. He conducted many motion studies to present this understanding to his peers. 
            </p>
            <br/>
            <br/>
            <img class="image1" src="./css/Projects/Grown/MotionStudy.png"></img>
            <br/>
            <br/>
            <p class='feats'> The lamp was constructed by first plasma cutting metal strips out of sheet metal. The strips of metal were then bent into triangles and welded together.
               The base was made from CNC cutting wood.
            </p>
            <br/>
            <br/>
            <img class="banner" src="./css/Projects/Grown/grown.0.png"></img>
            <br/>
            <br/>
            <img class="banner" src="./css/Projects/Grown/GrownBanner.png"></img>
            <div class='extraSpace'></div>
            
          </div>
        </div>
      </div>
    )
}

export default Grown;