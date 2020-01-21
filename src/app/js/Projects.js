import React, {Component} from 'react';
import '../css/Projects.css';

  export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.filters = ['Firebase', 'Web', 'Android', 'Java', 'C#', 'Unity', 'Arduino', 'C++', 'C ', 'GBA', 'state machine', 'game AI', 'jQuery', 'React', 'HTML/CSS/JS', 'iterative design', 'ideation', 'rapid prototyping', 'Processing', 'Graphics Libraries', 'Delaunay Algorithm', 'clear'];
        this.projects = [
          {
            name: 'Computer Graphics Series',
            tags: ['Processing', 'Graphics Libraries', 'Delaunay Algorithm', 'Java'],
            link: '/computer_graphics',
            description: 'Animated shapes and structures that the user can manipulate.',
            style: "./Projects/ComputerGraphics/Walker.jpg",
          },
          {
            name: 'Ice Climber',
            tags: ['GBA', 'C ', 'state machine'],
            link: '/ice_climber',
            description: 'Video game developed for the Gameboy Advance.',
            style: "./Projects/IceClimber/ice.jpg",
          },
          {
            name: 'Glance',
            tags: ['Arduino', 'C++', 'state machine'],
            link: '/glance',
            description: 'Smart product to keep users safe on their walk home.',
            style: "./Projects/Glance/glance0.jpg",
          },
          {
            name: 'Where\'s My Stuff App',
            tags: ['Android', 'Java', 'Firebase'],
            link: '/wms',
            description: 'Application to help users find their belongings after a natural disaster.',
            style: "./Projects/WMS/wms.jpg",
          },
          {
            name: 'The Legend of Scarf Boi',
            tags: ['Unity', 'C#', 'state machine', 'game AI'],
            link: '/scarfboi',
            description: 'Video game about a boy who turns dreams into nightmares.',
            style: "./Projects/Scarfboi/Scarfboi.jpg",
          },
          {
            name: 'Space Explorer',
            tags: ['iterative design','rapid prototyping', 'ideation'],
            link: '/spaceEx',
            description: 'Interactive space helmet that kids wear to explore the universe.',
            style: "./Projects/SpaceEx/SpaceEx.jpg",
          },
          {
            name: 'Unfurl Lamp Design',
            tags: ['iterative design', 'rapid prototyping',  'ideation'],
            link: '/grown',
            description: 'Floor lamp design to light up any space.',
            style: "./Projects/Grown/Grown.jpg",
          },
          {
            name: 'This Website',
            tags: ['React', 'HTML/CSS/JS', 'Web', 'jQuery'],
            link: '/thisWebsite',
            description: 'Website built from scratch in React.',
            style: "./Projects/Web/web.png",
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
        <div className='box3 color' >
            <div className='content'>
                <div className='sectionTitle'>Projects</div>
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
                        <a href={project.link} key={i} class="card">
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
            <div className='moreSpace'></div>
            <div className='moreSpace'></div>
            <div className='moreSpace'></div>
        </div> 
    )}
}
