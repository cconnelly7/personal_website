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
 
 

function WMS() {
    return(
      <div>
        <ScrollToTopOnMount />
        <div class="projPic">
          <h4 class='projHeader'>Where's My Stuff App</h4>
        </div>
        <div class="projBg">
          <div class="projContent">
            <img class="banner" src="./Projects/WMS/wmsBanner.png"></img>
            <h4 class='sectionHeader'>Overview</h4>
            <p>Where's My Stuff is an android application that helps users find their belongings after a natural disaster.
                When opened, the splashscreen is displayed and then three rotating welcome pages are shown. Users can post if they
                 lost or found items. If the user was affected by the natural disaster, they can request items and other users can donate items to them. 
            </p>
            <br/>
            <img class="banner" src="./Projects/WMS/wms.0.png"></img>
            <br/>
            <br/>
            <p>
            When the users are reporting or requesting items, they fill out a short description of the item and pick the location in which it was lost. Once they submit their item, it is stored in the database and thus shown on the map.
            </p>
            <br/>
            <div class="imgContainer">
              <img class="image2" src="./Projects/WMS/wms.1.png"></img>
              <img class="image2" src="./Projects/WMS/wms.2.png"></img>
              <img class="image2" src="./Projects/WMS/wms.4.png"></img>
              <img class="image2" src="./Projects/WMS/wms.3.png"></img>
            </div>
          </div>
        </div>
      </div>
    )
}

export default WMS;