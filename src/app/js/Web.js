import React from 'react';
import '../css/Project.css';
import $ from 'jquery';
import ScrollToTopOnMount from './ScrollToTopOnMount';


function Web() {
    return(
      <div>
        <ScrollToTopOnMount />
        <div class="projPic headerColor">
          <h4 class='projHeader'>This Website</h4>
        </div>
        <div class="projBg color">
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
            <p class='feats'>This website was built from scratch in <div className='emphasize'>React</div> from Dec 2019 - Jan 2020 using <div className='emphasize'>HTML</div>, <div className='emphasize'>CSS</div>, <div className='emphasize'>JavaScript</div>, and <div className='emphasize'>jQuery</div>. 
            <div className='emphasize'> React Router</div> and a <div className='emphasize'> dark mode</div> option were implemented to increase functionality and usability. The source code can be found <a href="https://github.com/cconnelly7/personal_website" target="_blank">here</a>. 
            </p>
            <div class='extraSpace'></div>
          </div>
        </div>
      </div>
    )
}

export default Web;