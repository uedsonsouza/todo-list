import React, { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = task => {
    setTodos([...todos, { task, completed: false }])
  }

  const toggleComplete = index => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  const editTodo = (index, newTask) => {
    const newTodos = [...todos]
    newTodos[index].task = newTask
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    </div>
  )
}

export default App
