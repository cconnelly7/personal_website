import React from 'react';
import '../css/Project.css';
import $ from 'jquery';
import ScrollToTopOnMount from './ScrollToTopOnMount'

function Glance() {
    return(
      <div>
        <ScrollToTopOnMount />
        <div class="projPic headerColor">
          <h4 class='projHeader'>Glance</h4>
        </div>
        <div class="projBg color">
          <div class="projContent">
            <img class="banner" src="./Projects/Glance/Glance.png"></img>
            <h4 class='sectionHeader'>Overview</h4>
            <p class='feats'> Glance is a smart product that helps users stay safe on their walk home at night. It features a distance sensor that attaches to the back of the user's backpack.
               When the product is turned on, if a predator gets within a close range to the user, a light that is attached to the backpack strap will flash orange to alert the user along with a gentle vibration. If
                the predator stays within this range over several seconds, the light will flash red.
            </p>
            <br/>
            <br/>
            <div class="imgContainer">
              <img class="image3" src="./Projects/Glance/distanceSensor.png"></img>
              <img class="image3" src="./Projects/Glance/light.png"></img>
            </div>
            <br/>
            <br/>
            <p class='feats'>
            The user can chose to attach their device to a clip to put on their backpack or on a wristband. 
            </p>
            <br/>
            <br/>
            <div className="h_iframe">
              <img className="ratio" src="http://placehold.it/16x9" />
              <iframe src="https://www.youtube.com/embed/KAOHrqJy8yw" frameBorder="0" allowFullScreen></iframe>
            </div>
            <br/>
            <br/>
            <img class="image1" src="./Projects/Glance/glance.gif"></img>
          <h4 class='sectionHeader'>Features/Tech Used</h4>
            <p class='feats'>Glance was build using <div className='emphasize'>Arduino</div> with programming done in <div className='emphasize'>C++</div>. 
            It featured a distance sensor, an LED light that acted as the User Interface, and an on/off button. 
            </p>
          </div>
          <div class='extraSpace'></div>
        </div>
      </div>
    )
}

export default Glance;