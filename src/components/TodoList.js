import React, { useState } from 'react'
import TodoItem from './TodoItem'
import TodoEdit from './TodoEdit'

const TodoList = ({ todos, toggleComplete, removeTodo, editTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })

  const submitUpdate = value => {
    editTodo(edit.id, value)
    setEdit({
      id: null,
      value: '',
    })
  }

  if (edit.id !== null) {
    return <TodoEdit edit={edit} onSubmit={submitUpdate} />
  }

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          setEdit={setEdit}
        />
      ))}
    </ul>
  )
}

export default TodoList
