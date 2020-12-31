import React from 'react'

const AppMeta = (props) => {
    return (
        <div>
            <div className="todo-app-info">
                <p>All Tasks <span className="info-icon">{props.appinfo.totalTodos}</span></p>
                <p>In Progress <span className="info-icon">{props.appinfo.inProgress}</span></p>
                <p>Completed <span className="info-icon">{props.appinfo.completedTodos}</span></p>
            </div>
            <div>
                <button onClick={props.clearlist}>Clear List</button>
            </div>
        </div>    
    )
}
export default AppMeta