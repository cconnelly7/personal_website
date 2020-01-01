import React from 'react';
import './Main.css';
import ContentPanel from './ContentPanel';
import HomeScreen from './Home';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Resume from './Resume';
import Blog from './Blog';
import Contact from './Contact';
import $ from 'jquery';

class Main extends React.Component {
    render () {
        $(function() {
			var homeH = $( window ).height(),
				navPanels = $();
				
			$('#prod-menu a').each(function() {
				navPanels = navPanels.add($(this.hash));	// array of nav panels according to nav items
            });
            
            // makes it so home is underlined when load page and dont have to wait for scroll
            navPanels.each(function() {
                var $p = $(this)	// current panel in loop
                
                if ( $( window ).scrollTop() + $('#prod-menu').outerHeight() >= $p.offset().top) { 
                    $("#prod-menu ul li").removeClass("sel");
                    $('#prod-menu a').filter('[href="#'+$p.attr('id')+'"]').parent().addClass("sel");
                }
            });
			
			$( window ).scroll(function() {
				$("#prod-menu").css("top", "0");

				// toggle nav btn that's highlighted
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
							scrollTop: target.offset().top //-$('#prod-menu').outerHeight()
						}, 700);
						return false;
					}
				}
			});
		});

        return (
            <div class="s-layout">
                <div class="s-layout__sidebar">
                <a class="s-sidebar__trigger" href="#0">
                    <i class="fa fa-bars"></i>
                </a>

                <nav class="s-sidebar__nav" id="prod-menu">
                    <ul>
                        <div className="circleBase type1"></div>
                        <h1 className="name">Chianne Connelly</h1>
                        <h1 className="job">Software Engineer</h1>
                        <li>
                        <a class="s-sidebar__nav-link" href="#home">
                            <i class="fa fa-home"></i><button className="bttn after-from-center" >Home</button>
                        </a>
                        </li>
                        <li>
                        <a class="s-sidebar__nav-link" href="#about">
                            <i class="fa fa-user"></i><button className="bttn after-from-center">About Me</button>
                        </a>
                        </li>
                        <li>
                        <a class="s-sidebar__nav-link" href="#skills">
                            <i class="fa fa-camera"></i><button className="bttn after-from-center">Skills</button>
                        </a>
                        </li>
                        <li>
                        <a class="s-sidebar__nav-link" href="#projects">
                            <i class="fa fa-camera"></i><button className="bttn after-from-center">Projects</button>
                        </a>
                        </li>
                        <li>
                        <a class="s-sidebar__nav-link" href="#resume">
                            <i class="fa fa-camera"></i><button className="bttn after-from-center">Resume</button>
                        </a>
                        </li>
                        <li>
                        <a class="s-sidebar__nav-link" href="#blog">
                            <i class="fa fa-camera"></i><button className="bttn after-from-center">Blog</button>
                        </a>
                        </li>
                        <li>
                        <a class="s-sidebar__nav-link" href="#contact">
                            <i class="fa fa-camera"></i><button className="bttn after-from-center">Contact</button>
                        </a>
                        </li>
                    </ul>
                </nav>
                </div>

                <div className='s-layout__content'>
                        <ContentPanel >		
                            <section id="home">	
                                <HomeScreen />
                            </section>
                            <section id="about">	
                                <AboutMe/>
                            </section>
                            <section id="skills">	
                                <Skills/>
                            </section>
                            <section id="projects">	
                                <Projects/>
                            </section>
                            <section id="resume">	
                                <Resume/>
                            </section>
                            <section id="blog">	
                                <Blog/>
                            </section>
                            <section id="contact">	
                                <Contact/>
                            </section>
                        </ContentPanel>
                    </div>
            </div>
            // <div className='row'>
            //     <div className='white-column'>
            //     {/*<div id="overlay" > class="cover blur-in" */}
                    
            //         <nav className='nav-column' id="prod-menu">
                        // <div className="circleBase type1"></div>
                        // <h1 className="name">Chianne Connelly</h1>
                        // <h1 className="job">Software Engineer</h1>
            //             <div class="wrapper">
            //                 <ul margin='0' padding='0'>
            //                     <li><a href="#home"><button className="bttn after-from-center" >Home</button></a></li>
            //                     <li><a href="#about"><button className="bttn after-from-center">About Me</button></a></li>
            //                     <li><a href="#skills"><button className="bttn after-from-center">Skills</button></a></li>
            //                     <li><a href="#projects"><button className="bttn after-from-center">Projects</button></a></li>
            //                     <li><a href="#resume"><button className="bttn after-from-center">Resume</button></a></li>
            //                     <li><a href="#blog"><button className="bttn after-from-center">Blog</button></a></li>
            //                     <li><a href="#contact"><button className="bttn after-from-center">Contact</button></a></li>
            //                 </ul>
            //             </div>
            //         </nav>


                    // <div className='content-column'>
                    //     <ContentPanel >		
                    //         <section id="home">	
                    //             <HomeScreen />
                    //         </section>
                    //         <section id="about">	
                    //             <AboutMe/>
                    //         </section>
                    //         <section id="skills">	
                    //             <Skills/>
                    //         </section>
                    //         <section id="projects">	
                    //             <Projects/>
                    //         </section>
                    //         <section id="resume">	
                    //             <Resume/>
                    //         </section>
                    //         <section id="blog">	
                    //             <Blog/>
                    //         </section>
                    //         <section id="contact">	
                    //             <Contact/>
                    //         </section>
                    //     </ContentPanel>
                    // </div>


            //         {/* </div> */}
            //     </div>
            // </div>
        )
    }
}

export default Main;