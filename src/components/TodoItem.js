import React from 'react'

const TodoItem = ({ todo, index, toggleComplete, removeTodo, setEdit }) => {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : '' }}
        onClick={() => toggleComplete(index)}
      >
        {todo.task}
      </span>
      <button onClick={() => removeTodo(index)}>Remove</button>
      <button onClick={() => setEdit({ id: index, value: todo.task })}>Edit</button>
    </li>
  )
}

export default TodoItem
