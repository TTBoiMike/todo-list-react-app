import React from 'react'
import AppMeta from './appMeta'
import Clock from '../assets/clock-solid.svg'


class Listings extends React.Component {

    buildListingHTML() {
        return  this.props.todoinfo.map((todo) => (
            <div className="todo-container" key={todo.id}>
                <div>
                    <p>{todo.description}</p>
                    <div className="todo-info">
                        <img className="meta-icon" src={Clock} alt="clock icon" />
                        {todo.time}
                    </div>
                </div>
                <input id={todo.id} onClick={(e) => this.props.handleCheckBox(e)} type="checkbox" name="completed" defaultChecked={todo.completed ? "checked" : ""}/>
            </div>
            ))
        }

    render() {
        return (
            <div>
                <AppMeta appinfo={this.props.appinfo} clearlist={this.props.clearlist} filter={this.props.filter}/>
                {this.buildListingHTML()}
            </div>
        )
    }
}

export default Listings