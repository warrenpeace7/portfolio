import React, { Component } from 'react'
import Project from './project'
import './Projects.css';

class Projects extends Component {
    state = {
        project1: {
            name:'Tic-Tac-Toe',
            summary:'This was an app that we developed using react. It is a simple tic-tac-toe board that we created to practice understaing components.'
        },
        project2: {
            name:'Profile site',
            summary:'This is the site you are currently using. It was developed using react. We needed to practice using our react, JSX, and CSS skills.'
        },
        project3: {
            name:'Hearthstone Site',
            summary:'This is a simple HTML and CSS site that I developed for learning. I used Hearthstone as the subject as it is a game that enjoy.'
        }
    }



    render() {
        console.log('Projects.render()')
        return (
            <div>
                <Project name={this.state.project1.name} summary={this.state.project1.summary} />
                <Project name={this.state.project2.name} summary={this.state.project2.summary} />
                <Project name={this.state.project3.name} summary={this.state.project3.summary} />
                <footer>
                    Tyler Thomas | Web Developer | Warrenpeace productions &copy;
             </footer>
            </div>
        )
    }
}
      

export default Projects