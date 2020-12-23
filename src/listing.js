import React from 'react'
import Clock from './assets/clock-solid.svg'


class Listings extends React.Component {
    constructor(props) {
        super(props);
    }
    
    handleCheck(e) {
        this.props.handleCheckBox(e);
    }

    buildListingHTML() {
        return  this.props.todoinfo.map((todo) => (
            <div className="todo-container">
                <div>
                    <h4>{todo.title}</h4>
                    <div className="todo-meta">
                        <img className="meta-icon" src={Clock} alt="clock icon" />
                        {todo.duration}
                    </div>
                </div>
                <input id={todo.id} onClick={(e) => this.handleCheck(e)} type="checkbox" className="checkbox" name="completed" />
            </div>
        ))
    }

    render(){
        return (
            <div className="todo-listing">
                {this.buildListingHTML()}
                <div className="todo-app-info">
                    <div>
                        <p>All Tasks <span className="info-icon">{this.props.appinfo.allTodos}</span></p>
                    </div>
                    <div>
                        <p>In Progress <span className="info-icon">{this.props.appinfo.inProgress}</span></p>
                    </div>
                    <div>
                        <p>Completed <span className="info-icon">{this.props.appinfo.completedTodos}</span></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Listings