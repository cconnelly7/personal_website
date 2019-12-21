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
import $ from 'jquery';

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
        $(function() {
			var homeH = $( window ).height(),
				navPanels = $();
				
			$('#prod-menu a').each(function() {
				navPanels = navPanels.add($(this.hash));	// easy array of nav panels according to nav items
			});
			
			$( window ).scroll(function() {
				// toggle top menu
				// if ( $( window ).scrollTop() < homeH/2) {
				// 	$("#prod-menu ul li").removeClass("sel");
				// 	$("#prod-menu").css("top", ($('#prod-menu').outerHeight()*-1));
				// } 
				// else {
					$("#prod-menu").css("top", "0");
				// };

				// toggle top menu selection
				navPanels.each(function() {
					var $p = $(this)	// current panel in loop
					
					if ( $( window ).scrollTop() + $('#prod-menu').outerHeight() >= $p.offset().top) { 
						$("#prod-menu ul li").removeClass("sel");
						$('#prod-menu a').filter('[href="#'+$p.attr('id')+'"]').parent().addClass("sel");
					}
				});
			});

			// animating anchor link scrolling
			// snippet from css-tricks 
			// css-tricks.com/snippets/jquery/smooth-scrolling
			$("a[href*=\\#]:not([href=\\#])").click(function() {
				if (window.location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && window.location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top-$('#prod-menu').outerHeight()
						}, 700);
						return false;
					}
				}
			});
		});

        return (
            <div className='row'>
                <div className='white-column'>
                    <nav className='nav-column' id="prod-menu">
                        <div className="circleBase type1"></div>
                        <h1 className="name">Chianne Connelly</h1>
                        <h1 className="job">Software Engineer</h1>
                        <div class="wrapper">
                            <ul>
                                <li><a href="#home"><button className="btn after-from-center">Home</button></a></li>
                                <li><a href="#about"><button className="btn after-from-center">About Me</button></a></li>
                                <li><a href="#skills"><button className="btn after-from-center">Skills</button></a></li>
                                <li><a href="#projects"><button className="btn after-from-center">Projects</button></a></li>
                                <li><a href="#resume"><button className="btn after-from-center">Resume</button></a></li>
                                <li><a href="#blog"><button className="btn after-from-center">Blog</button></a></li>
                                <li><a href="#contact"><button className="btn after-from-center">Contact</button></a></li>
                            </ul>
                        </div>
                    </nav>
                    {/* <section class="prod-hero"></section> */}

                    <div className='content-column'>
                        <ContentPanel >		
                            <section id="home">	
                                <HomeScreen/>
                            </section>
                            <section id="about">	
                                <AboutMe/>
                            </section>
                            <section id="skills">	
                                <PanelC/>
                            </section>
                            <section id="projects">	
                                <PanelD/>
                            </section>
                            <section id="resume">	
                                <PanelE/>
                            </section>
                            <section id="blog">	
                                <PanelF/>
                            </section>
                            <section id="contact">	
                                <Contact/>
                            </section>
                        </ContentPanel>
                    </div>
                </div>
            </div>




            // <div className='row'>
            //     <div className='white-column'>
            //         <ul className='nav-column' id="top-menu">

                        // <div className="circleBase type1"></div>
                        // <h1 className="name">Chianne Connelly</h1>
                        // <h1 className="job">Software Engineer</h1>

            //             <li class="active">
            //                 <a href="#"> <button className={this.btnStyle} onClick={()=>{
            //                     this.ref0.current.scrollIntoView({behavior:'smooth'})
            //                     // document.getElementById('0').className=this.btnActive
            //                 }}>Home</button></a>
            //             </li>
            //             <li>
            //                 <a href="#about"> <button className={this.btnStyle} onClick={()=>{
            //                     this.ref1.current.scrollIntoView({behavior:'smooth'})
            //                 }}>About Me</button></a>
            //             </li>
            //             <button className="btn after-from-center"onClick={()=>{
            //                 this.ref2.current.scrollIntoView({behavior:'smooth'})
            //             }}>Skills</button>

            //             <button className="btn after-from-center"onClick={()=>{
            //                 this.ref3.current.scrollIntoView({behavior:'smooth'})
            //             }}>Projects</button>

            //             <button className="btn after-from-center"onClick={()=>{
            //                 this.ref4.current.scrollIntoView({behavior:'smooth'})
            //             }}>Resume</button>

            //             <button className="btn after-from-center"onClick={()=>{
            //                 this.ref5.current.scrollIntoView({behavior:'smooth'})
            //             }}>Blog</button>
                        
            //             <button className="btn after-from-center"onClick={()=>{
            //                 this.ref6.current.scrollIntoView({behavior:'smooth'})
            //             }}>Contact</button>
            //         </ul>
            //         <div className='content-column'>
            //         <ContentPanel >
            //             <HomeScreen ref={this.ref0} />
            //             <AboutMe ref={this.ref1} />
            //             <PanelC ref={this.ref2} />
            //             <PanelD ref={this.ref3} />
            //             <PanelE ref={this.ref4} />
            //             <PanelF ref={this.ref5} />
            //             <Contact ref={this.ref6} />
            //         </ContentPanel>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default Main;