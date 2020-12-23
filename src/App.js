import React from 'react'
import Container from 'react-bootstrap/Container'
// import CSS files
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Create from './create'
import Listings from './listing'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      publishedTodos: [],
      completedTodos: 0,
      inProgress: 0,
      allTodos: 0
    }
    this.updatePublishedTodos = this.updatePublishedTodos.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
  }

  // update publishedTodos in state with data from create.js
  updatePublishedTodos(title, duration) {
    let id = this.state.publishedTodos.length;
    let completed = false;
    const newTodo = {title, duration, id, completed};
    let updateTodoList = [...this.state.publishedTodos, newTodo]
    this.setState((state) => ({
      publishedTodos: updateTodoList,
      inProgress: state.inProgress + 1,
      allTodos: state.allTodos + 1
    }))
  }

  // runs when the checkbox is clicked in a todo
  handleCheckBox(todo) {
    const currentTodos = this.state.publishedTodos;
    currentTodos[todo.target.id].completed = todo.target.checked;
    if(todo.target.checked === true) {
      this.setState((state) => ({
        publishedTodos: currentTodos,
        completedTodos: state.completedTodos + 1,
        inProgress: state.inProgress -1
      }))
    } else {
      this.setState((state) => ({
        publishedTodos: currentTodos,
        completedTodos: state.completedTodos - 1,
        inProgress: state.inProgress + 1
      }))
    }
    console.log(this.state)
  }

  render() {
    return (
      <Container>
        <div className="App">
          <Create onsubmit={this.updatePublishedTodos} />
          <Listings todoinfo={this.state.publishedTodos} handleCheckBox={this.handleCheckBox} appinfo={this.state}/>
        </div>
      </Container>
    )
  }
}

export default App;
