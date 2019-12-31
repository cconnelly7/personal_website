import React from 'react';
import './Project.css';
import $ from 'jquery';

$(function(){
  var shrinkHeader = 200;
   $(window).scroll(function() {
     var scroll = getCurrentScroll();
       if ( scroll >= shrinkHeader ) {
            $('.projPic').addClass('shrink');
                    $('.projPic h4').fadeOut('fast');
         }
         else {
            $('.projPic').removeClass('shrink');
            $('.projPic h4').fadeIn('fast');        
         }
   });
 function getCurrentScroll() {
     return window.pageYOffset || document.documentElement.scrollTop;
     }
 });
 
 $(document).ready(function(){
 
 })
 
 

function Project1() {
    return(
      <div>
        <div class="projPic">
          <h4>Computer Graphics Series</h4>
        </div>
        <div class="content">
          text<br/>text<br/>text<br/>text<br/>text<br/>text<br/>text<br/>text<br/>text<br/>text<br/>text<br/>text<br/>text<br/>text<br/>text<br/>text<br/>
        </div>
      </div>
    )
}

export default Project1;