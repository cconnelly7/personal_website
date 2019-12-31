import React from 'react';
import './Project.css';
import $ from 'jquery';

$(document).on("scroll", function(){
  if
    ($(document).scrollTop() > 100){
    $("header").addClass("shrink");
  }
  else
  {
    $("header").removeClass("shrink");
  }
});

function Project1() {
    return(
      <div>
        <projName>
          <h4>Lets shrink ;)</h4>
        </projName>
        <section class="container">
  <p><strong>Scroll down to see the magic in action...</strong></p>
<p>
Sed nulla cred Banksy jean shorts. Reprehenderit mumblecore incididunt anim accusamus. Keffiyeh Cosby sweater in cornhole elit, tote bag cillum banjo. Shabby chic YOLO banh mi sunt. Artisan blog Neutra, polaroid adipisicing Banksy +1 lo-fi umami distillery fixie seitan. Semiotics artisan flannel mollit craft beer Blue Bottle. Bespoke biodiesel banh mi literally.
</p>
</section>
        {/* <div class="cover" style="background-image: url('http://placekitten.com/600/400');">
          <div class="cover-content">
              <h3 class="title">
                  The kitten
              </h3>
              <div class="subtitle">Here is one cute kitten</div>
          </div>
        </div>
          
        <div class="post">	
          <section class="post-content">
            <p>This is a very cute kitten. And this is some lorem ipsum text: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h2>The title</h2>
            <img src="http://placekitten.com/720/300"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <hr/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="">The link</a>
          </section>
        </div> */}

        {/* <h1>This is my popup</h1>
        <a>Lorem ipsum dolor sit amet consectetur, adipiscing elit lacinia mus, sapien nibh imperdiet tempus. Vitae massa semper mi sagittis a cum cursus fusce per, gravida tellus metus purus litora nam ultricies donec, nibh dis ligula ad facilisi penatibus condimentum aenean.</a>
    
        <a>Aliquet odio id vulputate ad sodales blandit tempor, neque facilisi turpis dis curabitur ac velit potenti, montes bibendum pretium lacinia lobortis aenean. Orci integer eu tincidunt  scelerisque iaculis, porta elementum sagittis proin penatibus magna tempor.</a>
        <button name="close">Close</button> */}


      </div>
    )
}

export default Project1;