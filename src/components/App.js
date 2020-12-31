import React from 'react'
import Container from 'react-bootstrap/Container'
// import CSS files
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import Create from './create'
import Listings from './listing'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTodos: [],
      publishedTodos: [],
      completedTodos: 0,
      inProgress: 0,
      totalTodos: 0
    }

    this.updateAllTodos = this.updateAllTodos.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  updateAllTodos(title, duration) {
    let id = this.state.allTodos.length;
    let completed = false;
    const newTodo = {title, duration, id, completed};
    let updatedTodoList = [...this.state.allTodos, newTodo]
    console.log(updatedTodoList)
    this.setState((state) => ({
      allTodos: updatedTodoList,
      publishedTodos: updatedTodoList,
      inProgress: state.inProgress + 1,
      totalTodos: state.totalTodos + 1
    }))
  }

  handleCheckBox(todo) {
    const currentTodos = this.state.allTodos;
    currentTodos[todo.target.id].completed = todo.target.checked;
    if(todo.target.checked) {
      this.setState((state) => ({
        allTodos: currentTodos,
        completedTodos: state.completedTodos + 1,
        inProgress: state.inProgress -1
      }))
    } else {
      this.setState((state) => ({
        allTodos: currentTodos,
        completedTodos: state.completedTodos - 1,
        inProgress: state.inProgress + 1
      }))
    }
  }

  clearList() {
    this.setState({
      allTodos: [],
      publishedTodos: [],
      completedTodos: 0,
      inProgress: 0,
      totalTodos: 0
    })
  }

  render() {
    return (
      <Container>
        <div className="App">
          <Create onsubmit={this.updateAllTodos} />
          <Listings todoinfo={this.state.publishedTodos} handleCheckBox={this.handleCheckBox} appinfo={this.state} clearlist={this.clearList} />
        </div>
      </Container>
    )
  }
}

export default App;