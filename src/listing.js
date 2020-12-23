import React from 'react'
import MapMarker from './assets/map-marker-alt-solid.svg'
import Clock from './assets/clock-solid.svg'


class Listings extends React.Component {
    constructor(props) {
        super(props);
    }
    

    buildListingHTML() {
        return  this.props.todoinfo.map((todo) => (
            <div className="todo-container">
                <div>
                    <h4>{todo.title}</h4>
                    <div className="todo-meta">
                        <img className="meta-icon" src={Clock} />
                        {todo.duration}
                    </div>
                </div>
                <input type="checkbox" className="checkbox" id="completed" name="completed" />
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