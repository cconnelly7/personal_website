import React from 'react';
import '../css/Project.css';
import $ from 'jquery';
import ScrollToTopOnMount from './ScrollToTopOnMount';

function IceClimber() {
    return(
      <div>
        <ScrollToTopOnMount />
        <div class="projPic headerColor">
          <h4 class='projHeader'>Ice Climber</h4>
        </div>
        <div class="projBg color">
          <div class="projContent">
            <img class="banner" src="./Projects/IceClimber/ic.banner.png"></img>
            <h4 class='sectionHeader'>Overview</h4>
            <p class='feats'>Ice Climber is a video game developed in C for the Gameboy Advance. Due to the low level nature of C as a language, an emphasis was
               placed on the code architecture such that programming at the level of shuffling bytes could be easily understood.
               The player begins at the bottom of the mountain and they must climb to the top while avoiding falling ice balls and slippery ice patches. They must reach the top before their health runs out in order to win.
            </p>
            <br/>
            <br/>
            <div class="imgContainer">
              <img class="image2" src="./Projects/IceClimber/ic.0.png"></img>
              <img class="image2" src="./Projects/IceClimber/ic.1.png"></img>
              <img class="image2" src="./Projects/IceClimber/ic.2.png"></img>
              <img class="image2" src="./Projects/IceClimber/ic.3.png"></img>
            </div>
            <div class="imgContainer">
              <img class="image3" src="./Projects/IceClimber/ic.0.gif"></img>
              <img class="image3" src="./Projects/IceClimber/ic.1.gif"></img>
            </div>
            <h4 class='sectionHeader'>Features/Tech Used</h4>
            <p class='feats'>Coding was done in <div className='emphasize'>C</div>. Concepts such as a <div className='emphasize'>state machine</div>, <div className='emphasize'>collision detection</div>, <div className='emphasize'>collision maps</div>, and <div className='emphasize'>DMA</div> were applied.
            Special topics such as <div className='emphasize'>pallet swapping </div>and <div className='emphasize'>alpha blending</div> were implemented. 
            The source code can be found <a href="https://github.com/cconnelly7/Ice-Climber" target="_blank">here</a>.
            </p>
            <div class='extraSpace'></div>
          </div>
        </div>
      </div>
    )
}

export default IceClimber;