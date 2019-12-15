import React from 'react';
import './Main.css';
import ContentPanel from './ContentPanel';
import PanelA from './PanelA';
import PanelB from './PanelB';
import PanelC from './PanelC';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.refA = React.createRef();
        this.refB = React.createRef();
        this.refC = React.createRef();
    }
    render () {
        return (
            <div className='row'>
                <div className='white-column'>
                {/*<div className='green-column-container'> */}
                    <div className='green-column'>
                        <button className="main-paragraph hover_effect"onClick={()=>{
                            console.log(this.refA)
                            console.log(this.refA.current.offsetTop)
                            this.refA.current.scrollIntoView({behavior:'smooth'})
                        }}>Home</button>
                        <button className="main-paragraph hover_effect" onClick={()=>{
                            console.log(this.refB)
                            console.log(this.refB.current.offsetTop)
                            // window.scroll({top: this.refB.current.offsetTop, behavior: 'smooth'});
                            this.refB.current.scrollIntoView({behavior:'smooth'})
                        }}>Bio</button>
                        <button className="main-paragraph hover_effect"onClick={()=>{
                            console.log(this.refC)
                            console.log(this.refC.current.offsetTop)
                            this.refC.current.scrollIntoView({behavior:'smooth'})
                        }}>Resume</button>
                        <p className="main-paragraph hover_effect">Skills</p>
                        <p className="main-paragraph hover_effect">Projects</p>
                        <p className="main-paragraph hover_effect">Contact</p>
                    </div>
                    <div className='content-column'>
                    <ContentPanel >
                        <PanelA ref={this.refA} />
                        <PanelB ref={this.refB} />
                        <PanelC ref={this.refC} />
                    </ContentPanel>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;