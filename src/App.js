import React from 'react';
import './App.css';
import useDarkMode from 'use-dark-mode';
import App2 from './App2';


const App = () => {
    const darkMode = useDarkMode(false);
    return(
      <App2></App2>
    )
};

export default App;
