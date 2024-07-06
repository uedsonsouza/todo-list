import React from 'react'
import TodoItem from './TodoItem'
import TodoEdit from './TodoEdit'

const TodoList = ({ todos, toggleComplete, removeTodo, editTodo }) => {
  const [edit, setEdit] = React.useState({
    id: null,
    task: '',
  })

  const submitUpdate = task => {
    editTodo(edit.id, task)
    setEdit({
      id: null,
      task: '',
    })
  }

  if (edit.id) {
    return <TodoEdit edit={edit} onsubmit={submitUpdate} />
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
