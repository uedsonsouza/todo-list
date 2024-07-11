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
      <Button class="btn btn-primary" type="submit">
        submit
      </Button>
    </Form>
  )
}

export default TodoForm
