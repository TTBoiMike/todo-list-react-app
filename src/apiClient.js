import axios from 'axios'
const url = "https://todo-listprojectapi.herokuapp.com/"

class apiClient {

    clientRequest = (method, url, data) => {
        return axios({
            method,
            url,
            data
        })
        .catch((err) => {
            alert(err)
            console.log(err)
        })
    }

    // get all todos from database
    getTodos = () => {
        return this.clientRequest('get', url)
    }
    // add new todo to database
    addTodo = (data) => {
        return this.clientRequest('post', url, data)
    }
    // update a todo as completed/not comleted
    updateTodo = (id, data) => {
        return this.clientRequest('put', `${url}${id}`, data)
    }
    // delete all todos in database
    deleteTodos = () => {
        return this.clientRequest('delete', url)
    }
}

export default apiClient