import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <div className='row'>
          <div className='black-column'>
            Some Text in black column
          </div>
          <div className='green-column'>
            <p class="main-paragraph hover_effect">Home</p>
            <p class="main-paragraph hover_effect">Bio</p>
            <p class="main-paragraph hover_effect">Resume</p>
            <p class="main-paragraph hover_effect">Skills</p>
            <p class="main-paragraph hover_effect">Projects</p>
            <p class="main-paragraph hover_effect">Contact</p>
          </div>
          <div className='content-column'>
            Some Text in content column
          </div>
          <div className='black-column'>
            Some Text in black column
          </div>
        </div>
    </div>
  );
}

export default App;


// <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <div id="rectangle"></div>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>