/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { nanoid } from "nanoid"

const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
}

const FILTER_NAMES = Object.keys(FILTER_MAP)

    const App = (props) => {
        const [tasks, setTasks] = useState(props.tasks);
        const [filter, setFilter] = useState("All");
        const [isMobile, setIsMobile] = useState(false);
        const [darkMode, setDarkMode] = useState(false);

        useEffect(() => {
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 459);
            };
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        const addTask = (name) => {
            const newTask = { id: `todo-${nanoid()}`, name, completed: false };
            setTasks([...tasks, newTask]);
        };

        const toggleTaskCompleted = (id) => {
            setTasks((updatedTasks) => updatedTasks.map((task) =>
                id === task.id ? { ...task, completed: !task.completed } : task));
        };

        const deleteTask = (id) => {
            setTasks((remainingTasks) => remainingTasks.filter((task) => id !== task.id));
        };

        const clearCompleted = () => {
            setTasks(tasks.filter((task) => !task.completed));
        };

        const taskList = tasks
            .filter(FILTER_MAP[filter])
            .map((task) => (
                <Todo
                    key={task.id}
                    name={task.name}
                    id={task.id}
                    completed={task.completed}
                    toggleTaskCompleted={() => toggleTaskCompleted(task.id)}
                    deleteTask={() => deleteTask(task.id)}
                />
            ));

        const filterList = FILTER_NAMES.map((name) => (
            <FilterButton
                key={name}
                name={name}
                isPressed={name === filter}
                setFilter={() => setFilter(name)}
                isMobile={isMobile}
            />
        ));

        const itemOrItems = taskList.length === 1 ? "item" : "items";
        const amountOfItems = `${taskList.length} ${itemOrItems} left`;

        return (
            <div className={`todo-app ${darkMode ? "dark-mode" : ""}`}>
                <img
                    src={darkMode ? "/images/bg-desktop-dark.jpg" : "/images/bg-desktop-light.jpg"}
                    alt="gradient design"
                    className="hero-img"
                />
                <img
                    src={darkMode ? "/images/bg-mobile-dark.jpg" : "/images/bg-mobile-light.jpg"}
                    alt="gradient design"
                    className="mobile-hero"
                />
                <div className="todo-app-wrapper">
                    <header className="header">
                        <h1>TODO</h1>
                        <button type="button" onClick={() => setDarkMode(!darkMode)}>
                            <img
                                src={darkMode ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}
                                alt="Dark mode toggle icon"
                                className="dark-mode-icon"
                            />
                        </button>
                    </header>
                    <main>
                        <Form addTask={addTask} />
                        <div className="todo-list-wrapper">
                            <ul className="todo-list">{taskList}</ul>
                            <div className="todo-footer">
                                <p>{amountOfItems}</p>
                                <div className="filter-btn">{filterList}</div>
                                <button className="last-btn" type="button" onClick={clearCompleted}>
                                    Clear Completed
                                </button>
                            </div>
                        </div>
                        <div className="mobile-todo-footer">
                            <div className="mobile-footer-info">
                                <p>{amountOfItems}</p>
                                <button className="mobile-last-btn" type="button" onClick={clearCompleted}>
                                    Clear Completed
                                </button>
                            </div>
                            <div className="mobile-filter-btn">{filterList}</div>
                        </div>
                    </main>
                </div>
            </div>
        );
    };

export default App;
