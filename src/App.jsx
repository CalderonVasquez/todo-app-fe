/* eslint-disable react/prop-types */
import Todo from "./components/Todo";

const App = (props) => {

    const taskList = props.tasks.map(task =>
        <Todo 
            key={task.id}
            name={task.name}
            id={task.id}
            completed={task.completed}
        />
    )

    return (
        <div className="todo-app">
            <img src="images/bg-desktop-light.jpg" alt="mountain range" className="hero-img"></img>
            <img src="images/bg-mobile-light.jpg" alt="mountain range" className="mobile-hero-img"></img>
                <div className="todo-app-wrapper">
                <div className="header">
                        <h1>TODO</h1>
                        <button>
                            <img src="images/icon-moon.svg" alt="Dark mode toggle icon" className="dark-mode-icon"/>
                        </button>
                </div>
                    <form className="todo-form">
                        <input
                            type="text"
                            id="new-todo"
                            className="new-todo"
                            placeholder="Create a new todo..."
                            aria-label="Create a new todo"
                        />
                    </form>
                    <div className="todo-list-wrapper">
                        <ul className="todo-list">
                            {taskList}
                        </ul>
                        <div className="todo-footer">
                            <p>5 items left</p>
                            <div className="filter-btn">
                                <button className="blue-btn" type="button">All</button>
                                <button type="button">Active</button>
                                <button type="button">Completed</button>
                            </div>
                            <button className="last-btn" type="button">Clear Completed</button>
                        </div>
                </div>
                <div className="mobile-todo-footer">
                    <div className="mobile-footer-info">
                        <p>5 items left</p>
                        <button className="mobile-last-btn" type="button">Clear Completed</button>
                    </div>
                    <div className="mobile-filter-btn">
                        <button className="mobile-blue-btn" type="button">All</button>
                        <button type="button">Active</button>
                        <button type="button">Completed</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;


// Learn React todo-0
// Build a Todo App todo-1
// Master JavaScript todo-2
// Explore Vite todo-3
// Practice Coding todo-4