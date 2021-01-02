import React from 'react'

const AppMeta = (props) => {
    return (
        <div>
            <h5>All Tasks <span className="info-icon">( {props.appinfo.totalTodos} )</span></h5>
            <div className="todo-app-meta">
                <button style={props.appinfo.visibility === "all" ? {backgroundColor: "#50E3A4"} : {backgroundColor: ""}} id="all" onClick={(e) => props.filter(e.target.id)}>All <span className="info-icon">( {props.appinfo.allTodos.length} )</span></button>
                <button style={props.appinfo.visibility === "in_progress" ? {backgroundColor: "#50E3A4"} : {backgroundColor: ""}} id="inprogress" onClick={(e) => props.filter(e.target.id)}>In Progress <span className="info-icon">( {props.appinfo.inProgress} )</span></button>
                <button style={props.appinfo.visibility === "completed" ? {backgroundColor: "#50E3A4"} : {backgroundColor: ""}} id="completed" onClick={(e) => props.filter(e.target.id)}>Completed <span className="info-icon">( {props.appinfo.completedTodos} )</span></button>
            </div>   
        </div>
    )
}
export default AppMeta