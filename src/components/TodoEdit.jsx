import useTodoEdit from '../hooks/useTodoEdit'
import { Form, Button } from 'react-bootstrap'

const TodoEdit = ({ edit, onSubmit }) => {
  const [value, setValue, handleSubmit] = useTodoEdit(edit.task, onSubmit)



  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group>
        <Form.Control
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Update task"
        />
      </Form.Group>
      <Button type="submit" variant="primary" className="mt-2">
        Update
      </Button>
    </Form>
  )
}

export default TodoEdit
