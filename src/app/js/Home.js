import React from 'react';
import '../css/Home.css';

class HomeScreen extends React.Component {
    render() {
        return (
            <div>
                <div className='homeImgWrapper'>
                    <img id="webPic" className='box0' src='http://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif'></img> 
                        <h2 className="header fade-up1">I am a<br/>software engineer</h2>
                    <img id="webPic" className='box' src='http://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif'></img> 
                        <h2 className="header fade-up">Hello!<br/>I'm Chianne</h2>
                </div>
                <div className='extraSpace'></div>
            </div>
        )
    }
}
    


export default React.forwardRef((props, ref) => <HomeScreen/>);