import React from 'react'
import '../App.css'

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
            <form className="create-form" onChange={(e) => this.handleChange(e)} onSubmit={(e) => this.handleSubmit(e)}>
                <input type="text" id="title" placeholder="What do you need to do?" name="title" required />
                    <select name="duration" id="duration" required>
                        <option value="">How long will it take?</option>
                        <option value="15 minutes">15 minutes</option>
                        <option value="30 minutes">30 minutes</option>
                        <option value="45 minutes">45 minutes</option>
                        <option value="1 hour">1 hour</option>
                        <option value="1 hour 15 minutes">1 hour 15 minutes</option>
                        <option value="1 hour 30 minutes">1 hour 30 minutes</option>
                        <option value="1 hour 45 minutes">1 hour 45 minutes</option>
                        <option value="2 hours">2 hours</option>
                    </select>
                <button type="submit" className="button-add">Add</button>
            </form>
        )
    }
}

export default Create