

// const darkModeTemplate = (
//     <div className="dark-mode todo-app">
//         <img src="images/bg-desktop-dark.jpg" alt="gradient design" className="hero-img-dark"></img>
//         <img src="images/bg-mobile-dark.jpg" alt="gradient design" className="mobile-hero-dark"></img>
//         <div className="todo-app-wrapper">
//             <div className="header">
//                 <h1>TODO</h1>
//                 <button >
//                     <img src="images/icon-sun.svg" alt="Dark mode toggle icon" className="light-mode-icon" />
//                 </button>
//             </div>
//             <Form addTask={addTask} />
//             <div className="dark-mode todo-list-wrapper">
//                 <ul className="dark-mode todo-list">
//                     {taskList}
//                 </ul>
//                 <div className="dark-mode todo-footer">
//                     <p>{amountOfItems}</p>
//                     <div className="dark-mode filter-btn">
//                         {filterList}
//                     </div>
//                     <button
//                         className="last-btn"
//                         type="button"
//                         onClick={clearCompleted}>
//                         Clear Completed
//                     </button>
//                 </div>
//             </div>
//             <div className="mobile-todo-footer">
//                 <div className="dark-mode mobile-footer-info">
//                     <p>{amountOfItems}</p>
//                     <button
//                         className="mobile-last-btn"
//                         type="button"
//                         onClick={clearCompleted}>
//                         Clear Completed
//                     </button>
//                 </div>
//                 <div className="dark-mode mobile-filter-btn">
//                     {filterList}
//                 </div>
//             </div>
//         </div>
//     </div>
// );

// const lightModeTemplate = (
//     <div className="todo-app">
//         <img src="images/bg-desktop-light.jpg" alt="mountain range" className="hero-img-light"></img>
//         <img src="images/bg-mobile-light.jpg" alt="mountain range" className="mobile-hero-light"></img>
//         <div className="todo-app-wrapper">
//             <div className="header">
//                 <h1>TODO</h1>
//                 <button >
//                     <img src="images/icon-moon.svg" alt="Dark mode toggle icon" className="dark-mode-icon" />
//                 </button>
//             </div>
//             <Form addTask={addTask} />
//             <div className="todo-list-wrapper">
//                 <ul className="todo-list">
//                     {taskList}
//                 </ul>
//                 <div className="todo-footer">
//                     <p>{amountOfItems}</p>
//                     <div className="filter-btn">
//                         {filterList}
//                     </div>
//                     <button
//                         className="last-btn"
//                         type="button"
//                         onClick={clearCompleted}>
//                         Clear Completed
//                     </button>
//                 </div>
//             </div>
//             <div className="mobile-todo-footer">
//                 <div className="mobile-footer-info">
//                     <p>{amountOfItems}</p>
//                     <button
//                         className="mobile-last-btn"
//                         type="button"
//                         onClick={clearCompleted}>
//                         Clear Completed
//                     </button>
//                 </div>
//                 <div className="mobile-filter-btn">
//                     {filterList}
//                 </div>
//             </div>
//         </div>
//     </div>
// )