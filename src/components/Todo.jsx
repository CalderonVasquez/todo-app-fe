/* eslint-disable react/prop-types */


const Todo = ({ name, id, completed, toggleTaskCompleted, deleteTask }) => {
    return (
        <li>
            <input
                type="checkbox"
                id={id}
                defaultChecked={completed} 
                onClick={toggleTaskCompleted}
                />
            <label htmlFor={id}>{name}</label>
            <button className="delete-btn" onClick={deleteTask}>
                <img src="images/icon-cross.svg" alt="x button" />
            </button>
        </li>
    )
}

export default Todo; 