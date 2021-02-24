import React from 'react';
import '../css/Project.css';
import ScrollToTopOnMount from './ScrollToTopOnMount';
 

function ScarfBoi() {
    return(
      <div>
        <ScrollToTopOnMount />
        <div class="projPic headerColor">
          <h4 class='projHeader'>The Legend of Scarf Boi</h4>
        </div>
        <div class="projBg color">
          <div class="projContent">
            <img class="banner" src="./Projects/Scarfboi/ScarfBoiBanner.png"></img>
            <h4 class='sectionHeader'>Overview</h4>
            <p class='feats'>The Legend of Scarf Boi is a video game developed in Unity 3D using C#. Play as Scarf Boi as he
                attempts to free himself from the confinements of a dreamworld from which he was created. In order to escape, he
                must avoid the Dreamcatchers, steal goodness, and ultimately turn the dreams he enters into nightmares.
            </p>
            <br/>
            <br/>
            <div className="h_iframe">
              <img className="ratio" src="http://placehold.it/16x9" />
              <iframe src="https://www.youtube.com/embed/XM-Yt4_J-2Q" frameBorder="0"></iframe>
            </div>
            <br/>
            <br/>
            <h4 class='sectionHeader'>Features/Tech Used</h4>
            <p class='feats'> Player detection for <div className='emphasize'>enemy AI</div>, <div className='emphasize'>mapping animations</div> to individual body parts, <div className='emphasize'>state machine</div>, <div className='emphasize'>Unity 3D</div>, <div className='emphasize'>C#</div>.
            </p>
            <div class='extraSpace'></div>
          </div>
        </div>
      </div>
    )
}

export default ScarfBoi;