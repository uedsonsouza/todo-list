import React from 'react'
import { ListGroup, Button, Row, Col } from 'react-bootstrap'

const TodoItem = ({ todo, index, toggleComplete, removeTodo, setEdit }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
        <span
            style={{ textDecoration: todo.completed ? 'line-through' : '' }}
            onClick={() => toggleComplete(index)}
        >
            {todo.task}
        </span>
        <Row>
            <Col>
            <Button variant="warning" onClick={() => setEdit({ id: index, value: todo.task })}>
                Edit
            </Button>
            </Col>
            <Col>
            <Button variant="danger" onClick={() => removeTodo(index)}>
                Delete
            </Button>
            </Col>
        </Row>
    </ListGroup.Item>
  )
}

export default TodoItem
