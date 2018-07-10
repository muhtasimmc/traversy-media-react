import React, { Component } from 'react';

// this is a compoenent class and each component has its own state
class AddProject extends Component {
  // need constructor method to create a state object for each class
  constructor(){
    super()
    this.state = {
      newProject: {}
    }
  }




  // must be called 'defaultProps' to be referenced as this.props
  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e){
    e.preventDefault()
    if(this.refs.title.value === ''){
      alert('title is required')
    }
    else{
      this.setState({newProject: {
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        this.props.addProject(this.state.newProject)
      })
    }
    this.setState({})

  }

  render() {
    let categoryOptions = this.props.categories.map(
      category=>{
        return  <option key={category} value={category}>{category}</option>
      }
    )
    return (
      <div >
      <h3>Add Project</h3>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>Title</label><br />
          <input type='text' ref="title"/>
        </div>
        <div>
          <label>Category</label><br />
          <select ref='category'>
            {categoryOptions}
          </select>
        </div>
        <input type='submit' value="Submit" />
      </form>
      </div>
    );
  }
}

export default AddProject;
