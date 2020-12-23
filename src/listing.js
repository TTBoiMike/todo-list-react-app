import React from 'react'
import Clock from './assets/clock-solid.svg'


class Listings extends React.Component {
    
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
            </div>
        )
    }
}

export default Listings