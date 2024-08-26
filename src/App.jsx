const App = () => {
    return (
        <div className="todo-app">
            <div className="header">
                <h1>TODO</h1>
                <img src="images/icon-moon.svg" alt="Dark mode toggle icon" className="dark-mode-icon" />
            </div>

            <form>
                <label htmlFor="new-todo" className="visually-hidden">Create a new todo</label>
                <input
                    type="text"
                    id="new-todo"
                    className="new-todo"
                    placeholder="Create a new todo..."
                    aria-label="Create a new todo"
                />
            </form>

            <ul aria-labelledby="todo-list">
                <li>
                    <input type="checkbox" id="todo-1" />
                    <label htmlFor="todo-1">Learn React</label>
                </li>
                <li>
                    <input type="checkbox" id="todo-2" />
                    <label htmlFor="todo-2">Build a Todo App</label>
                </li>
                <li>
                    <input type="checkbox" id="todo-3" />
                    <label htmlFor="todo-3">Master JavaScript</label>
                </li>
                <li>
                    <input type="checkbox" id="todo-4" />
                    <label htmlFor="todo-4">Explore Vite</label>
                </li>
                <li>
                    <input type="checkbox" id="todo-5" />
                    <label htmlFor="todo-5">Practice Coding</label>
                </li>
            </ul>

            <div className="todo-footer">
                <p>5 items left</p>
                <div className="filters">
                    <button type="button">All</button>
                    <button type="button">Active</button>
                    <button type="button">Completed</button>
                    <button type="button">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default App;
