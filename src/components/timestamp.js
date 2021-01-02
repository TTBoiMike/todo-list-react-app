import React from 'react'

class Timestamp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    render() {
        return (
            <div className="timestamp">
                <p>{this.state.date.getDate()} / {this.state.date.getMonth()+1} / {this.state.date.getFullYear()}</p>
            </div>
        )
    }
}
export default Timestamp