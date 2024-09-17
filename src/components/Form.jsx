/* eslint-disable react/prop-types */
import { useState } from "react";

const Form = ({ addTask }) => {
    const [name, setName] = useState("")

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name !== "") {
            addTask(name)
            setName("")
        }
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                id="new-todo"
                value={name}
                onChange={handleChange}
                className="new-todo"
                placeholder="Create a new todo..."
                aria-label="Create a new todo"
            />
        </form>
    )
}

export default Form;