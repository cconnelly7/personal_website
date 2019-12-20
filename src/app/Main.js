import React from 'react';
import './Main.css';
import ContentPanel from './ContentPanel';
import HomeScreen from './Home';
import AboutMe from './AboutMe';
import PanelC from './PanelC';
import PanelD from './PanelD';
import PanelE from './PanelE';
import PanelF from './PanelF';
import Contact from './Contact';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.ref0 = React.createRef();
        this.ref1 = React.createRef();
        this.ref2 = React.createRef();
        this.ref3 = React.createRef();
        this.ref4 = React.createRef();
        this.ref5 = React.createRef();
        this.ref6 = React.createRef();
        this.btnStyle = "btn after-from-center"
        this.btnActive = 'btnActive'
    }
    render () {
        return (
            <div className='row'>
                <div className='white-column'>
                    <div className='nav-column'>
                        <div className="circleBase type1"></div>
                        <div className="name">Chianne Connelly</div>
                        <h1 className="job">Software Engineer</h1>
                        <button id='0' className={this.btnStyle} onClick={()=>{
                            this.ref0.current.scrollIntoView({behavior:'smooth'})
                            // document.getElementById('0').className=this.btnActive
                        }}>Home</button>
                        <button id='1' className={this.btnStyle} onClick={()=>{
                            this.ref1.current.scrollIntoView({behavior:'smooth'})
                        }}>About Me</button>
                        <button className="btn after-from-center"onClick={()=>{
                            this.ref2.current.scrollIntoView({behavior:'smooth'})
                        }}>Skills</button>
                        <button className="btn after-from-center"onClick={()=>{
                            this.ref3.current.scrollIntoView({behavior:'smooth'})
                        }}>Projects</button>
                        <button className="btn after-from-center"onClick={()=>{
                            this.ref4.current.scrollIntoView({behavior:'smooth'})
                        }}>Resume</button>
                        <button className="btn after-from-center"onClick={()=>{
                            this.ref5.current.scrollIntoView({behavior:'smooth'})
                        }}>Blog</button>
                        <button className="btn after-from-center"onClick={()=>{
                            this.ref6.current.scrollIntoView({behavior:'smooth'})
                        }}>Contact</button>
                    </div>
                    <div className='content-column'>
                    <ContentPanel >
                        <HomeScreen ref={this.ref0} />
                        <AboutMe ref={this.ref1} />
                        <PanelC ref={this.ref2} />
                        <PanelD ref={this.ref3} />
                        <PanelE ref={this.ref4} />
                        <PanelF ref={this.ref5} />
                        <Contact ref={this.ref6} />
                    </ContentPanel>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;