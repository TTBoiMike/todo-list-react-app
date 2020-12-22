import React from 'react'

class Listings extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.todoinfo)
    }
    

    buildListingHTML() {
        return  this.props.todoinfo.map((todo) => (
            <div>
                <h4>{todo.title}</h4>
                <div>
                    {todo.location}
                    {todo.time}
                    {todo.duration}
                </div>
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