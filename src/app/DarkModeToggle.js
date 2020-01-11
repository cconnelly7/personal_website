import React from 'react';
import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';
import './ContentPanel.css'

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle">
      <div class='toggleContainer' onClick={darkMode.toggle}>
        <button type="button" class='toggImg' onClick={darkMode.disable}> ☀ </button>
        <button type="button" class='toggImg' onClick={darkMode.enable}> ☾ </button>
      </div>
    </div>

  );
};

export default DarkModeToggle;
