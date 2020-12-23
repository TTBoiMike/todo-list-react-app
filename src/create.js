import React from 'react'
import './App.css'

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            duration: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState)
    }

    // passes new todo information to state in App.js
    handleSubmit(event) {
        event.preventDefault();
        this.props.onsubmit(this.state.title, this.state.duration);
    }

    render() {
        return (
            <div>
                <h3>Create Todo</h3>
                <form id="create-form" onChange={(e) => this.handleChange(e)} onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" id="title" placeholder="what do you need to do?" name="title" />
                    <div>
                        <select name="duration" id="duration">
                            <option value="0 minutes">0 minutes</option>
                            <option value="15 minutes">15 minutes</option>
                            <option value="30 minutes">30 minutes</option>
                            <option value="45 minutes">45 minutes</option>
                            <option value="60 minutes">60 minutes</option>
                            <option value="75 minutes">75 minutes</option>
                            <option value="90 minutes">90 minutes</option>
                            <option value="105 minutes">105 minutes</option>
                            <option value="120 minutes">120 minutes</option>
                        </select>
                    </div>
                    <button>+</button>
                </form>
            </div>
        )
    }
}

export default Create