import React from 'react';
import './ContentPanel.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const PanelD = React.forwardRef((props, ref)=>{

    return (
        <div className='box2' >
            <button><Link to="/project1">project1</Link></button>
        </div> 
    )
}) 
export default PanelD;