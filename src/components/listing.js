import React from 'react'
import AppMeta from './appMeta'
import Clock from '../assets/clock-solid.svg'


class Listings extends React.Component {

    buildListingHTML() {
            return  this.props.todoinfo.map((todo) => (
                <div className="todo-container">
                    <div>
                        <h5>{todo.title}</h5>
                        <div className="todo-meta">
                            <img className="meta-icon" src={Clock} alt="clock icon" />
                            {todo.duration}
                        </div>
                    </div>
                    <input id={todo.id} onClick={(e) => this.props.handleCheckBox(e)} type="checkbox" className="checkbox" name="completed" checked={todo.completed ? "checked" : ""}/>
                </div>
            ))
        }

    render() {
        return (
            <div>
                <AppMeta appinfo={this.props.appinfo} clearlist={this.props.clearlist} filter={this.props.filter}/>
                {this.buildListingHTML()}
                <button className="button-clear" onClick={this.props.clearlist}>Clear List</button>
            </div>
        )
    }
}

export default Listings