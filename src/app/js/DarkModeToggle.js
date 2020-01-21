import React from 'react';
import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';
import '../css/Main.css'

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle">
      <button className="lightButton" onClick={darkMode.disable}>
      ☀
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button className="darkButton" onClick={darkMode.enable}>
        ☾
      </button>
    </div>

  );
};

export default DarkModeToggle;
