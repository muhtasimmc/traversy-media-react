import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  // class member variables outside the methods don't need declaration keyword such as 'const, var, or let'???
  render() {
    let projectItems;
    if(this.props.projects){
      // projects is an array of three objects
    projectItems = this.props.projects.map(project =>{
        // console.log(project)
        return (
          <ProjectItem key={project.title} project={project} />
        )
      })
    }
    return (
      <ul className="Projects">
      {projectItems}
      </ul>
    );
  }
}

export default Projects;
