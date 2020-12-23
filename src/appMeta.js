import React from 'react'

const AppMeta = (props) => {

    console.log(props)
    
    return (
        <div>
            <div className="todo-app-info">
                <div>
                    <p>All Tasks <span className="info-icon">{props.appinfo.allTodos}</span></p>
                </div>
                <div>
                    <p>In Progress <span className="info-icon">{props.appinfo.inProgress}</span></p>
                </div>
                <div>
                    <p>Completed <span className="info-icon">{props.appinfo.completedTodos}</span></p>
                </div>
            </div>
            <div>
                <button onClick={props.clearlist}>Clear List</button>
            </div>
        </div>    
    )
}
export default AppMeta