import React from 'react'
import './App.css';
import Create from './create'
import Listings from './listing'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      publishedTodos: []
    }
    this.updatePublishedTodos = this.updatePublishedTodos.bind(this);
  }

  // update publishedTodos in state with data from create.js
  updatePublishedTodos(title, location, time, duration) {
    let id = this.state.publishedTodos.length;
    let completed = false;
    const newTodo = {title, location, time, duration, id, completed};
    let updateTodoList = [...this.state.publishedTodos, newTodo]
    this.setState({
      publishedTodos: updateTodoList
    })
  }

  render() {
    return (
      <div Name="App">
        <Create onsubmit={this.updatePublishedTodos} />
        <Listings todoinfo={this.state.publishedTodos}/>
      </div>
    )
  }
}

export default App;
