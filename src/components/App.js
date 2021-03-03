import React from 'react'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import Create from './create'
import Listings from './listing'
import Timestamp from './timestamp'
import ApiClient from '../apiClient'

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
    this.apiClient = new ApiClient()
  }

  getTodos = () => {
    this.apiClient.getTodos()
      .then(({ data }) => {
        let inprogress = 0
        let completed = 0
        data.map((todo) => {
          if (todo.completed === 0) {
            inprogress++
            return todo.completed = false
          } else {
            completed++
            return todo.completed = true
          }
        })

        let todosToShow
        if(this.state.visibility === "all") {
          todosToShow = data;
        } else if (this.state.visibility === "completed") {
          todosToShow = this.state.allTodos.filter(todo => todo.completed === true)
        } else {
          todosToShow = this.state.allTodos.filter(todo => todo.completed === !true)
        }
        this.setState({
          allTodos: data,
          publishedTodos: todosToShow,
          completedTodos: completed,
          inProgress: inprogress,
          totalTodos: data.length
        })
      })
  }

  // fetch todos when page loads
  componentDidMount() {
    this.getTodos()
  }

  //add a new todo to database
  addNewTodo = async (todo) => {
    console.log("new todo", todo)
    await this.apiClient.addTodo(todo)
    this.getTodos()
  }

  handleCheckBox = async (e) => {
    let todo = this.state.allTodos.find(todo => todo.id == e.currentTarget.id)
    todo.completed = !todo.completed
    console.log(todo)
    await this.apiClient.updateTodo(todo.id, todo)
    this.getTodos()
  }

  clearList = async () => {
    await this.apiClient.deleteTodos()
    this.getTodos()
  }

  filterPublishedTodos = (filter) => {
    if (filter === "completed") {
      let completedTodos = this.state.allTodos.filter((todo) => todo.completed === true);
      this.setState({
        publishedTodos: completedTodos,
        visibility: "completed"
      })
    } else if (filter === "inprogress") {
      let inProgressTodos = this.state.allTodos.filter((todo) => todo.completed === false)
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
          <Create onsubmit={this.addNewTodo} clearlist={this.clearList} />
          <Listings todoinfo={this.state.publishedTodos} handleCheckBox={this.handleCheckBox} appinfo={this.state} clearlist={this.clearList} filter={this.filterPublishedTodos} />
        </div>
      </Container>
    )
  }
}

export default App;
