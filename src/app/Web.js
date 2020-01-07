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
 
 

function Web() {
    return(
      <div>
        <ScrollToTopOnMount />
        <div class="projPic">
          <h4 class='projHeader'>This Website</h4>
        </div>
        <div class="projBg">
          <div class="projContent">
            <h4 class='sectionHeader'>Overview</h4>
            <p class='feats'>It's like inception but in a website.
            </p>
            <br/>
            <br/>
            <div className="h_iframe">
              <img className="ratio" src="http://placehold.it/16x9" />
              <iframe src="./index.html" frameBorder="0" allowFullScreen></iframe>
            </div>
            <h4 class='sectionHeader'>Features/Tech Used</h4>
            <p class='feats'>This website was built from scratch in <div className='emphasize'>React</div> in December 2019 using <div className='emphasize'>HTML</div>, <div className='emphasize'>CSS</div>, <div className='emphasize'>JavaScript</div>, and <div className='emphasize'>jQuery</div>. 
            <div className='emphasize'> React Router</div> and other node modules were used to add functionality. The source code can be found <a href="https://github.com/cconnelly7/personal_website" target="_blank">here</a>. 
            </p>
            <div class='extraSpace'></div>
          </div>
        </div>
      </div>
    )
}

export default Web;