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
 
 

function WMS() {
    return(
      <div>
        <ScrollToTopOnMount />
        <div class="projPic headerColor">
          <h4 class='projHeader'>Where's My Stuff App</h4>
        </div>
        <div class="projBg color">
          <div class="projContent">
            <img class="banner" src="./Projects/WMS/wmsBanner.png"></img>
            <h4 class='sectionHeader'>Overview</h4>
            <p class='feats'>Where's My Stuff is an android application where users can post if they lost or found items in the case of a natural disaster.
               If the user was affected by the natural disaster, they can request items and other users can donate items to them. When opened, the splashscreen is displayed and then three rotating welcome pages are shown.
            </p>
            <br/>
            <br/>
            <img class="banner" src="./Projects/WMS/wms.0.png"></img>
            <br/>
            <br/>
            <p class='feats'>
            When users are reporting or requesting items, they fill out a short description of the item and pick the location in which it was lost. Once they submit their item, it is stored in the database and thus shown on the map.
            </p>
            <br/>
            <div class="imgContainer">
              <img class="image4" src="./Projects/WMS/wms.1.png"></img>
              <img class="image4" src="./Projects/WMS/wms.2.png"></img>
              <img class="image4" src="./Projects/WMS/wms.3.png"></img>
            </div>
            <h4 class='sectionHeader'>Features/Tech Used</h4>
            <p class='feats'>Implemented <div className='emphasize'>Google Maps Platform services </div> such as <div className='emphasize'>Time Zone API </div> 
            and <div className='emphasize'>Maps SDK for Android</div>. Used <div className='emphasize'>Firebase</div> and <div className='emphasize'>JSON</div> to store users and other objects. Developed using <div className='emphasize'>Java</div> and <div className='emphasize'>Android Studio</div>.
            The source code can be found <a href="https://github.com/mcw0805/wheres-my-stuff" target="_blank">here</a>. 
            </p>
            <div class='extraSpace'></div>
          </div>
        </div>
      </div>
    )
}

export default WMS;