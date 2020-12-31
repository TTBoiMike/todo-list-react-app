import React from 'react'

const AppMeta = (props) => {
    console.log(props)
    return (
        <div>
            <div className="todo-app-info">
                <button onClick={(e) => props.filter(e.target.id)}>All Tasks <span className="info-icon">{props.appinfo.totalTodos}</span></button>
                <button id="inprogress" onClick={(e) => props.filter(e.target.id)}>In Progress <span className="info-icon">{props.appinfo.inProgress}</span></button>
                <button id="completed" onClick={(e) => props.filter(e.target.id)}>Completed <span className="info-icon">{props.appinfo.completedTodos}</span></button>
            </div>
            <div>
                <button onClick={props.clearlist}>Clear List</button>
            </div>
        </div>    
    )
}
export default AppMeta