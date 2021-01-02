import React from 'react'

const AppMeta = (props) => {
    return (
        <div>
            <h5>All Tasks <span className="info-icon">( {props.appinfo.totalTodos} )</span></h5>
            <div className="todo-app-meta">
                <button id="inprogress" onClick={(e) => props.filter(e.target.id)}>In Progress <span className="info-icon">( {props.appinfo.inProgress} )</span></button>
                <button id="completed" onClick={(e) => props.filter(e.target.id)}>Completed <span className="info-icon">( {props.appinfo.completedTodos} )</span></button>
            </div>   
        </div>
    )
}
export default AppMeta