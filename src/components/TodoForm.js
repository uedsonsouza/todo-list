import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!task) return
    addTodo(task)
    setTask('')
  }

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group>
        <Form.Control
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="Add a new task"
        />
      </Form.Group>
      <Button type="submit" variant="primary" className="mt-2">
        Add
      </Button>
    </Form>
  )

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         value={task}
  //         onChange={e => setTask(e.target.value)}
  //         placeholder="Add a new task"
  //       />
  //       <button type="submit">Add</button>
  //     </form>
  //   )
}

export default TodoForm
