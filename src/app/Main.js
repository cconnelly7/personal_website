import React from 'react';
import './Main.css';
import ContentPanel from './ContentPanel';
import PanelA from './PanelA';
import PanelB from './PanelB';
import PanelC from './PanelC';
import PanelD from './PanelD';
import PanelE from './PanelE';
import PanelF from './PanelF';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.refA = React.createRef();
        this.refB = React.createRef();
        this.refC = React.createRef();
        this.refD = React.createRef();
        this.refE = React.createRef();
        this.refF = React.createRef();
    }
    render () {
        return (
            <div className='row'>
                <div className='white-column'>
                {/*<div className='green-column-container'> */}
                    <div className='green-column'>
                        <button className="btn after-from-center"onClick={()=>{
                            console.log(this.refA)
                            console.log(this.refA.current.offsetTop)
                            this.refA.current.scrollIntoView({behavior:'smooth'})
                        }}>Home</button>
                        <button className="btn after-from-center" onClick={()=>{
                            console.log(this.refB)
                            console.log(this.refB.current.offsetTop)
                            // window.scroll({top: this.refB.current.offsetTop, behavior: 'smooth'});
                            this.refB.current.scrollIntoView({behavior:'smooth'})
                        }}>About Me</button>
                        <button className="btn after-from-center"onClick={()=>{
                            console.log(this.refC)
                            console.log(this.refC.current.offsetTop)
                            this.refC.current.scrollIntoView({behavior:'smooth'})
                        }}>Resume</button>
                        <button className="btn after-from-center"onClick={()=>{
                            console.log(this.refD)
                            console.log(this.refD.current.offsetTop)
                            this.refD.current.scrollIntoView({behavior:'smooth'})
                        }}>Skills</button>
                        <button className="btn after-from-center"onClick={()=>{
                            console.log(this.refE)
                            console.log(this.refE.current.offsetTop)
                            this.refE.current.scrollIntoView({behavior:'smooth'})
                        }}>Projects</button>
                        <button className="btn after-from-center"onClick={()=>{
                            console.log(this.refF)
                            console.log(this.refF.current.offsetTop)
                            this.refF.current.scrollIntoView({behavior:'smooth'})
                        }}>Contact</button>
                    </div>
                    <div className='content-column'>
                    <ContentPanel >
                        <PanelA ref={this.refA} />
                        <PanelB ref={this.refB} />
                        <PanelC ref={this.refC} />
                        <PanelD ref={this.refD} />
                        <PanelE ref={this.refE} />
                        <PanelF ref={this.refF} />
                    </ContentPanel>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;