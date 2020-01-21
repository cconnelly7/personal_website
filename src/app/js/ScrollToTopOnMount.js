import React from 'react';
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

export default ScrollToTopOnMount;