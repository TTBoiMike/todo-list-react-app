import React from 'react'
import Container from 'react-bootstrap/Container'
// import CSS files
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import Create from './create'
import Listings from './listing'
import Timestamp from './timestamp'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTodos: [],
      publishedTodos: [],
      completedTodos: 0,
      inProgress: 0,
      totalTodos: 0,
      visibility: "all"
    }
  }

  componentDidMount() {
    const todos = localStorage.getItem("todo");
    this.setState((state) => ({
      allTodos: JSON.parse(todos) || [],
      publishedTodos: state.allTodos
    }))
    this.filterPublishedTodos("all")
  }

  updateAllTodos = (title, duration) => {
    let id = this.state.allTodos.length;
    let completed = false;
    const newTodo = {title, duration, id, completed};
    let updatedTodoList = [...this.state.allTodos, newTodo];
    this.setState((state) => ({
      allTodos: updatedTodoList,
      publishedTodos: updatedTodoList,
      inProgress: state.inProgress + 1,
      totalTodos: state.totalTodos + 1,
      visibility: "all"
    }), () => localStorage.setItem("todo", JSON.stringify(this.state.allTodos)))
  }

  handleCheckBox = (todo) => {
    const currentTodos = this.state.allTodos;
    currentTodos[todo.target.id].completed = todo.target.checked;
    if(todo.target.checked) {
      this.setState((state) => ({
        allTodos: currentTodos,
        completedTodos: state.completedTodos + 1,
        inProgress: state.inProgress !== 0 ? state.inProgress -1 : state.inProgress
      }))
    } else {
      this.setState((state) => ({
        allTodos: currentTodos,
        completedTodos: state.completedTodos - 1,
        inProgress: state.inProgress + 1
      }))
    }
    setTimeout(() => {
      this.filterPublishedTodos(this.state.visibility)
    }, 250)
  }

  clearList = () => {
    localStorage.clear()
    this.setState({
      allTodos: [],
      publishedTodos: [],
      completedTodos: 0,
      inProgress: 0,
      totalTodos: 0,
      visibility: "all"
    })
  }

  filterPublishedTodos = (filter) => {
    if(filter === "completed") {
        let completedTodos = this.state.allTodos.filter((todo) => todo.completed === true);
        this.setState({
          publishedTodos: completedTodos,
          visibility: "completed"
        })
    } else if (filter === "inprogress") {
      let inProgressTodos =  this.state.allTodos.filter((todo) => todo.completed === false)
      this.setState({
        publishedTodos: inProgressTodos,
        visibility: "inprogress"
      })
    } else {
      this.setState((state) => ({
        publishedTodos: state.allTodos,
        visibility: "all"
      }))
    }
  }

  render() {
    console.log(this.state)
    return (
      <Container>
        <div className="App">
          <Timestamp />
          <Create onsubmit={this.updateAllTodos} clearlist={this.clearList}/>
          <Listings todoinfo={this.state.publishedTodos} handleCheckBox={this.handleCheckBox} appinfo={this.state} clearlist={this.clearList} filter={this.filterPublishedTodos}/>
        </div>
      </Container>
    )
  }
}

export default App;
