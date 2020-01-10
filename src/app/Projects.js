import React, {Component} from 'react';
import $ from 'jquery';
import './Projects.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

  export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.filters = ['Unity', 'Firebase', 'Web', 'Android', 'Java', 'C#', 'React', 'HTML/CSS/JS', 'Android SDK', 'clear'];
        this.projects = [
          {
            name: 'Computer Graphics Series',
            tags: ['React', 'HTML/CSS/JS', 'Web/Android/iOS', 'Firebase'],
            link: '/computer_graphics',
            description: 'Animated shapes and structures that the user can manipulate.',
            style: "./Projects/ComputerGraphics/Walker.jpg",
          },
          {
            name: 'Ice Climber',
            tags: ['Android SDK', 'Java', 'Android'],
            link: '/ice_climber',
            description: 'Video game developed for the Gameboy Advance.',
            style: "./Projects/IceClimber/ice.jpg",
          },
          {
            name: 'Glance',
            tags: ['Corona SDK', 'Lua', 'Android'],
            link: '/glance',
            description: 'Smart product to keep users safe on their walk home.',
            style: "./Projects/Glance/glance0.jpg",
          },
          {
            name: 'Where\'s My Stuff App',
            tags: ['Unity', 'C#', 'Android', 'Firebase'],
            link: '/wms',
            description: 'Application to help users find their belongings after a natural disaster.',
            style: "./Projects/WMS/wms.jpg",
          },
          {
            name: 'The Legend of Scarf Boi',
            tags: ['Unity', 'C#', 'Oculus'],
            link: '/scarfboi',
            description: 'Video game about a boy who turns dreams into nightmares.',
            style: "./Projects/Scarfboi/Scarfboi.jpg",
          },
          {
            name: 'SpaceEx',
            tags: ['Android SDK', 'Java', 'Android', 'Firebase'],
            link: '/spaceEx',
            description: 'Interactive space helmet that kids wear to explore the universe.',
            style: "./Projects/SpaceEx/SpaceEx.jpg",
          },
          {
            name: 'Grown Lamp Design',
            tags: ['Unity', 'C#', 'Android'],
            link: '/grown',
            description: 'Floor lamp design to light up any space.',
            style: "./Projects/Grown/Grown.jpg",
          },
          {
            name: 'This Website',
            tags: ['React', 'HTML/CSS/JS', 'Web'],
            link: '/thisWebsite',
            description: 'Built this website from scratch in React',
            style: "./Projects/Web/web.jpg",
          }
        ];
        this.state = {filter: 'clear', filteredProjects: this.projects};
      }
    
      filter(word) {
          console.log('in filter function with ' + word);
        if (word == 'clear' || word == this.state.filter) {
          this.setState({filteredProjects: this.projects, filter: 'clear'});
        } else {
          this.setState({filter: word});
          var list = [];
          for (var i = 0; i < this.projects.length; i++) {
            var found = false;
            for (var j = 0; j < this.projects[i].tags.length; j++) {
              if (this.projects[i].tags[j].indexOf(word) != -1) {
                found = true;
              }
            }
            if (found) {
              list.push(this.projects[i]);
            }
          }
          this.setState({filteredProjects: list});
        }
      }

    render () {
    return (
        <div className='box3' >
            <div className='content'>
                <div data-aos='fade-in' className='sectionTitle'>Projects</div>
                <div className='whiteSpace'></div>
            </div>

            <div className='moreSpace'></div>

            <div className='filter'>Filters:
                {this.filters.map((filter, i) => {return (
                    <a key={i} className={this.state.filter==filter?"filterBtn filterBtnActive":"filterBtn"} onClick={()=>{this.filter(filter)}}>{filter}</a>
                );})}
            </div>

                <ul class="cards">
                    {this.state.filteredProjects.map((project, i) => {return (
                        <li class="cards_item">
                        <a href={project.link} key={i} data-aos="zoom-in-left" class="card">
                            <img class="card_image" src={project.style}></img>
                            <div class="card_content">
                                <h4 class="card_title">{project.name}</h4>
                                <div class='filtersWrapper'>
                                    {project.tags.map((tag, i)=> {return (<div class='tag' key={i}>{tag}</div>)})}
                                </div>
                                <p class="card_text">{project.description}</p>
                            </div>
                        </a>
                    </li>
                    );})}
                </ul>
        </div> 
    )}
}
