import React from 'react';
import '../css/Project.css';
import $ from 'jquery';
import ScrollToTopOnMount from './ScrollToTopOnMount';

function SpaceEx() {
    return(
      <div>
        <ScrollToTopOnMount />
        <div class="projPic headerColor">
          <h4 class='projHeader'>Space Explorer</h4>
        </div>
        <div class="projBg color">
          <div class="projContent">
            <img class="banner" src="./Projects/SpaceEx/SpaceExBanner.png"></img>
            <h4 class='sectionHeader'>Overview</h4>
            <p class='feats'>Children can travel to the farthest corners of their imagination with this helmet. When they turn the helmet on,
               an interactive space screen is displayed and they can travel anywhere in the entire universe. The design integrates 
                technology in a way that jumpstarts a childs imagination rather than closes it off. The helmet is
                 a space themed augmented reality for children. 
            </p>
            <br/>
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
            <h4 class='sectionHeader'>Features/Tech Used</h4>
            <p class='feats'>Space Explorer is a AR toy designed for children. If it were built, it would need to include two plastic screens with an OLED screen sandwiched between them, a processor such as the Qualcomm snapdragon, and a USBC port for charging.
            </p>
            <div class='extraSpace'></div>
          </div>
        </div>
      </div>
    )
}

export default SpaceEx;