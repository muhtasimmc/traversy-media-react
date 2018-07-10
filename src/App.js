import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

import './App.css';

class App extends Component {
  // outside class methods, you do NOT need 'this' keyword
  constructor(){
    super()
    // inside class methods, member variables need to be referenced using 'this' keyword
    this.state = {
      projects: []
    }
  }

// life cycle method
// fires everytime a component is re rendered
componentWillMount(){
  this.setState({projects: [{
    title: 'Business Website',
    category: 'Web Design'
  },
  {
    title: 'Social App',
    category: 'Mobile Development'
  },
  {
    title: 'Ecommerce Shopping',
    category: 'Web Development'
  }]})
}

handleAddProject(project){
  let newProjects = this.state.projects
  newProjects.push(project)
  this.setState({projects: newProjects})

}


  render() {
    return (
      <div className="App">
      <AddProject addProject={this.handleAddProject.bind(this)}  />
      <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
