import React from 'react'
import Container from 'react-bootstrap/Container'
// import CSS files
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Create from './create'
import Listings from './listing'
import { renderIntoDocument } from 'react-dom/test-utils';

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
    this.clearList = this.clearList.bind(this);
  }

  updatePublishedTodos(title, duration) {
    let id = 1;
    let completed = false;
    const newTodo = {title, duration, id, completed};
    let updateTodoList = [...this.state.publishedTodos, newTodo]
    this.setState((state) => ({
      publishedTodos: updateTodoList,
      inProgress: state.inProgress + 1,
      allTodos: state.allTodos + 1
    }))
    console.log(this.state.publishedTodos)
  }

  handleCheckBox(todo) {
    const currentTodos = this.state.publishedTodos;
    currentTodos[todo.target.id].completed = todo.target.checked;
    if(todo.target.checked) {
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

  clearList() {
    console.log("list cleared!")
    this.setState({
      publishedTodos: [],
      completedTodos: 0,
      inProgress: 0,
      allTodos: 0
    })
  }

  render() {
    return (
      <Container>
        <div className="App">
          <Create onsubmit={this.updatePublishedTodos} />
          <Listings todoinfo={this.state.publishedTodos} handleCheckBox={this.handleCheckBox} appinfo={this.state} clearlist={this.clearList} />
        </div>
      </Container>
    )
  }
}

export default App;
