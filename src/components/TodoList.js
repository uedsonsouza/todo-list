import React, { useState } from 'react'
import TodoItem from './TodoItem'
import TodoEdit from './TodoEdit'
import { ListGroup } from 'react-bootstrap'

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
    <ListGroup>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          setEdit={setEdit}
        />
      ))}
    </ListGroup>
  )
}

export default TodoList
