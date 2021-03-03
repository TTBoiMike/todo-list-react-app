import React from 'react'

const AppMeta = (props) => {
    return (
        <div>
            <div className="todo-app-meta">
                <button style={props.appinfo.visibility === "all" ? {backgroundColor: "#EC9706"} : {backgroundColor: ""}} id="all" onClick={(e) => props.filter(e.target.id)}>All <span className="info-icon">{props.appinfo.allTodos.length}</span></button>
                <button style={props.appinfo.visibility === "inprogress" ? {backgroundColor: "#EC9706"} : {backgroundColor: ""}} id="inprogress" onClick={(e) => props.filter(e.target.id)}>In Progress <span className="info-icon">{props.appinfo.inProgress}</span></button>
                <button style={props.appinfo.visibility === "completed" ? {backgroundColor: "#EC9706"} : {backgroundColor: ""}} id="completed" onClick={(e) => props.filter(e.target.id)}>Completed <span className="info-icon">{props.appinfo.completedTodos}</span></button>
            </div>   
        </div>
    )
}
export default AppMeta