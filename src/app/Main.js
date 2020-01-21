import React from 'react';
import './css/Main.css';
import ContentPanel from './ContentPanel';
import HomeScreen from './Home';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import $ from 'jquery';
import DarkModeToggle from './DarkModeToggle';

class Main extends React.Component {
    render () {
        $(function() {
			var homeH = $( window ).height(),
                navPanels = $(),
                $window = $(window),
                $profPic = $('#profPic'),
                $name = $('#name'),
                $job = $('#job');              

            // remove prof Pic, name, and job title when the hamburger nav bar appears
            $window.resize(function resize(){
                if ($window.width() < 1100) {
                    return $profPic.removeClass('type1'), $name.removeClass('name'), $job.removeClass('job'), $name.addClass('textHide'), $job.addClass('textHide')
                }
        
                $profPic.addClass('type1');
                $name.removeClass('textHide');
                $job.removeClass('textHide');
                $name.addClass('name');
                $job.addClass('job');
            }).trigger('resize');
                
            // scrolling to/highlighting the nav section selected
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
							scrollTop: target.offset().top
						}, 1);
						return false;
					}
				}
			});
        });

        return (
            <div class="s-layout">
                <div class="s-layout__sidebar">
                <nav class="s-sidebar__nav colors" id="prod-menu">
                    <ul>
                        <div class="wrapper">
                            <div className="circleBase type1" id="profPic"></div>
                            <h1 className="name nameColor" id="name">Chianne Connelly</h1>
                            <h1 className="job nameColor" id="job">Software Engineer</h1>
                        </div>
                        <li>
                        <a class="s-sidebar__nav-link" href="#home">
                            <i class="fa fa-home"></i><button className="bttn after-from-center bttnColor" >Home</button>
                        </a>
                        </li>
                        <li>
                        <a class="s-sidebar__nav-link" href="#about">
                            <i class="fa fa-user"></i><button className="bttn after-from-center bttnColor">About Me</button>
                        </a>
                        </li>
                        <li>
                        <a class="s-sidebar__nav-link" href="#skills">
                            <i class="fa fa-plus-square"></i><button className="bttn after-from-center bttnColor">Skills</button>
                        </a>
                        </li>
                        <li>
                        <a class="s-sidebar__nav-link" href="#projects">
                            <i class="fa fa-cubes"></i><button className="bttn after-from-center bttnColor">Projects</button>
                        </a>
                        </li>
                        <li>
                        <a class="s-sidebar__nav-link" href="#resume">
                            <i class="fa fa-file"></i><button className="bttn after-from-center bttnColor">Resume</button>
                        </a>
                        </li>
                        <li>
                        <a class="s-sidebar__nav-link" href="#contact">
                            <i class="fa fa-address-book"></i><button className="bttn after-from-center bttnColor">Contact</button>
                        </a>
                        </li>
                        <li>
                            <DarkModeToggle class="s-sidebar__nav-togg" />
                        </li>
                    </ul>
                </nav>
                </div>

                <div className='s-layout__content color'>
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
                        <section id="contact">	
                            <Contact/>
                        </section>
                    </ContentPanel>
                </div>
            </div>
        )
    }
}

export default Main;