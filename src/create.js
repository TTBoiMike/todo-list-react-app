import React from 'react'

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            location: "",
            time: "",
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
        this.props.onsubmit(this.state.title, this.state.location, this.state.time, this.state.duration);
    }

    render() {
        return (
            <div>
                <h3>Create Todo</h3>
                <form onChange={(e) => this.handleChange(e)} onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" id="title" placeholder="what do you need todo?" name="title" />
                    <input type="text" id="location" placeholder="location" name="location" />
                    <div>
                        <input type="time" id="time" name="time" />
                        <input type="number" id="duration" name="duration" />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Create