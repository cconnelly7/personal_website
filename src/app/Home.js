import React from 'react';
import './Home.css';
import $ from 'jquery';

class HomeScreen extends React.Component {
    render() {
        setInterval(function() {
            $('h2').fadeOut(500, function() {
                
                var $this = $(this);
                $this.text($this.text() == 'I am a' ? 'Hello!' : 'I am a');  
                $this.toggleClass('header fade-up header fade-up1');         
                $this.fadeIn(500);
            });
            $('h3').fadeOut(500, function() {
                var $this = $(this);
                $this.text($this.text() == 'Software Engineer' ? 'I\'m Chianne' : 'Software Engineer');   
                $this.toggleClass('header fade-up header fade-up1');     
                $this.fadeIn(500);
            });
            $('p').fadeOut(500, function() {
                var $this = $(this);
                $this.toggleClass('box box0');     
                $this.fadeIn(500);
            });

        }, 4500);
        return (
            <div>
                <p className='box' ref={this.props.myref}>
                    <div id="changeText"></div>
                    <h2 className="header fade-up">Hello!</h2>
                    <h3 className="header fade-up">I'm Chianne</h3>
                </p> 
                <div className='extraSpace'></div>
            </div> 
        )
    }
}
    


export default React.forwardRef((props, ref) => <HomeScreen 
  myref={ref} {...props}
/>);