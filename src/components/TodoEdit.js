import React, { useState } from 'react'

const TodoEdit = ({ edit, onsubmit }) => {
  const [task, setTask] = useState(edit.task)

  const handleSubmit = e => {
    e.preventDefault()
    if (!task) return
    onsubmit(task)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Edit task"
      />
      <button type="submit">Save</button>
    </form>
  )
}

export default TodoEdit
