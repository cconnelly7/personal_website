import React from 'react';
import './App.css';
import Main from './app/Main';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Project1 from './app/Project1';

class App extends React.Component {
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
        <div>
            <nav>
              <div className="App">
                <Link to="/"></Link>
              </div>
            </nav>
            <Switch>
              <Route path="/project1">
                <Project1 />
              </Route>
              <Route path="/">
                <Main></Main>
              </Route>
            </Switch>
        </div>
    </Router>
    )
  }
};

export default App;
