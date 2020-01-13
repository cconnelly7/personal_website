import React from 'react';
import './App.css';
import Main from './app/Main';
import 'aos/dist/aos.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CompGraphics from './app/CompGraphics';
import IceClimber from './app/IceClimber';
import Glance from './app/Glance';
import Grown from './app/Grown';
import WMS from './app/WMS';
import ScarfBoi from './app/ScarfBoi';
import SpaceEx from './app/SpaceEx';
import Web from './app/Web';
import AOS from 'aos';


class App2 extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }
  render(){
    return(
      <Router>
            <nav>
              <Router className="App colors" basename="/src/app" />
              <Link to="/"></Link> 
            </nav>
            <Switch>
              <Route path="/computer_graphics">
                <CompGraphics />
              </Route>
              <Route path="/ice_climber">
                <IceClimber />
              </Route>
              <Route path="/glance">
                <Glance />
              </Route>
              <Route path="/wms">
                <WMS />
              </Route>
              <Route path="/scarfboi">
                <ScarfBoi />
              </Route>
              <Route path="/spaceEx">
                <SpaceEx />
              </Route>
              <Route path="/grown">
                <Grown />
              </Route>
              <Route path="/thisWebsite">
                <Web />
              </Route>
              <Route path="/" >
                <Main ></Main>
              </Route>
            </Switch>
    </Router>
    )
  }
};

export default App2;
