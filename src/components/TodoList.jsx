import TodoItem from './TodoItem'
import TodoEdit from './TodoEdit'
import { ListGroup } from 'react-bootstrap'
import { useEditTodo } from '../hooks/useTodoList'

const TodoList = ({ todos, toggleComplete, removeTodo, editTodo }) => {
  const { edit, setEdit, submitUpdate } = useEditTodo(editTodo)

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
