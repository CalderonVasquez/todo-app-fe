/* eslint-disable react/no-unknown-property */

const App = () => {
    return (
        <div class="todo-app">
            <h1>TODO</h1>

            <form>
                <label for="new-todo" class="visually-hidden">Create a new todo</label>
                <input
                    type="text"
                    id="new-todo"
                    class="new-todo"
                    placeholder="Create a new todo..."
                    aria-label="Create a new todo"
                />
            </form>

            <ul aria-labelledby="todo-list">
                <li>
                    <input type="checkbox" id="todo-1" />
                    <label for="todo-1">Learn React</label>
                </li>
                <li>
                    <input type="checkbox" id="todo-2" />
                    <label for="todo-2">Build a Todo App</label>
                </li>
                <li>
                    <input type="checkbox" id="todo-3" />
                    <label for="todo-3">Master JavaScript</label>
                </li>
                <li>
                    <input type="checkbox" id="todo-4" />
                    <label for="todo-4">Explore Vite</label>
                </li>
                <li>
                    <input type="checkbox" id="todo-5" />
                    <label for="todo-5">Practice Coding</label>
                </li>
            </ul>

            <div class="todo-footer">
                <p>5 items left</p>
                <div class="filters">
                    <button type="button">All</button>
                    <button type="button">Active</button>
                    <button type="button">Completed</button>
                    <button type="button">Delete</button>
                </div>
            </div>
        </div>

    )
}

export default App