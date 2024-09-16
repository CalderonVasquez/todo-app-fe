import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const DATA = [
  { name: "Learn React", id: "todo-0", completed: true },
  { name: "Build Todo App", id: "todo-1", completed: false },
  { name: "Master JavaScript", id: "todo-2", completed: false },
  { name: "Explore Vite", id: "todo-3", completed: false },
  { name: "Practice Coding", id: "todo-4", completed: false },
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App tasks={DATA} />
  </StrictMode>,
)
