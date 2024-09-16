/* eslint-disable react/prop-types */


const Todo = ({name, id, completed}) => {
    return (
        <li>
            <input type="checkbox" id={id} defaultChecked={completed} />
            <label htmlFor={id}>{name}</label>
            <button className="delete-btn">
                <img src="images/icon-cross.svg" alt="x button" />
            </button>
        </li>
    )
}

export default Todo 